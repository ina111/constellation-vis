const EARTH_RADIUS_KM = 6371;

async function readToml(path: string): Promise<any | null> {
  try {
    const txt = await Bun.file(path).text();
    return Bun.TOML.parse(txt);
  } catch (err) {
    console.error(`Failed to parse ${path}:`, err);
    return null;
  }
}

const satData = (await readToml("public/satellites.toml")) as
  | { satellites: any[] }
  | null;
let satellites: any[] = satData?.satellites ?? [];

interface ShellSpec {
  name: string;
  count: number;
  planes: number;
  phasing?: number;
  apogee_altitude: number;
  eccentricity?: number;
  inclination: number;
  raan_range?: number;
  raan_start?: number;
  argp?: number;
  mean_anomaly_0?: number;
}

interface ConstellationSpec {
  name: string;
  epoch: string;
  shells: ShellSpec[];
}

let nextSatnum = 100000;

function expandConstellation(c: ConstellationSpec): any[] {
  const epoch = new Date(String(c.epoch));
  const sats: any[] = [];
  for (const shell of c.shells) {
    const count = Number(shell.count);
    const planes = Number(shell.planes);
    const perPlane = Math.floor(count / planes);
    const phasing = Number(shell.phasing ?? 0);
    const ecc = Number(shell.eccentricity ?? 0);
    const inc = Number(shell.inclination);
    const raanRange = Number(shell.raan_range ?? 360);
    const raanStart = Number(shell.raan_start ?? 0);
    const argp = Number(shell.argp ?? 0);
    const ma0 = Number(shell.mean_anomaly_0 ?? 0);
    const semiMajor =
      (EARTH_RADIUS_KM + Number(shell.apogee_altitude)) / (1 + ecc);
    for (let p = 0; p < planes; p++) {
      const raan = raanStart + (raanRange / planes) * p;
      for (let s = 0; s < perPlane; s++) {
        const ma = ma0 + (360 / perPlane) * s + (360 / count) * phasing * p;
        sats.push({
          type: "elements",
          satnum: nextSatnum++,
          epoch,
          semiMajorAxisKm: semiMajor,
          eccentricity: ecc,
          inclinationDeg: inc,
          raanDeg: raan,
          argPerigeeDeg: argp,
          meanAnomalyDeg: ma,
        });
      }
    }
  }
  return sats;
}

const constData = (await readToml("public/constellation.toml")) as
  | { constellation: ConstellationSpec }
  | null;
if (constData?.constellation) {
  satellites = satellites.concat(expandConstellation(constData.constellation));
}

function serialize(value: any, indent = 0): string {
  const pad = "  ".repeat(indent);
  if (value instanceof Date) {
    return `new Date(${JSON.stringify(value.toISOString())})`;
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const inner = value
      .map((v) => pad + "  " + serialize(v, indent + 1))
      .join(",\n");
    return `[\n${inner}\n${pad}]`;
  }
  if (value && typeof value === "object") {
    const inner = Object.entries(value)
      .map(([k, v]) => `${k}: ${serialize(v, indent + 1)}`)
      .join(",\n" + pad + "  ");
    return `{\n${pad}  ${inner}\n${pad}}`;
  }
  return JSON.stringify(value);
}

const normalized = satellites.map((s) => {
  if (s.type === "tle") {
    return { type: "tle", lines: [s.line1, s.line2] };
  }
  if (s.type === "elements") {
    return {
      type: "elements",
      elements: {
        satnum: Number(s.satnum),
        epoch: new Date(String(s.epoch)),
        semiMajorAxisKm: Number(s.semiMajorAxisKm),
        eccentricity: Number(s.eccentricity),
        inclinationDeg: Number(s.inclinationDeg),
        raanDeg: Number(s.raanDeg),
        argPerigeeDeg: Number(s.argPerigeeDeg),
        meanAnomalyDeg: Number(s.meanAnomalyDeg),
      },
    };
  }
  throw new Error("Unknown satellite type");
});

const content = `import type { SatelliteSpec } from "./satellites";

const SATELLITES: SatelliteSpec[] = ${serialize(normalized)};

export default SATELLITES;
`;

await Bun.write("src/satellites.generated.ts", content);

