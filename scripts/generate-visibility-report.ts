import { parseSatellitesToml, parseConstellationToml, parseGroundStationsToml } from "../src/utils/tomlParse";
import { generateVisibilityReport } from "../src/utils/visibilityReport";

function preprocessToml(text: string): string {
  return text.replace(
    /(epoch\s*=\s*)(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z)/,
    (_, p1, p2) => `${p1}"${p2}"`,
  );
}

async function main() {
  const startArg = Bun.argv[2];
  const stepArg = Bun.argv[3];
  const startTime = startArg ? new Date(startArg) : new Date();
  const stepMinutes = stepArg ? Number(stepArg) : 10;

  const satText = await Bun.file("public/satellites.toml").text();
  let satellites = parseSatellitesToml(satText);

  try {
    const constRaw = await Bun.file("public/constellation.toml").text();
    const constText = preprocessToml(constRaw);
    satellites = satellites.concat(parseConstellationToml(constText));
  } catch {
    /* no constellation file */
  }

  const gsText = await Bun.file("public/groundstations.toml").text();
  const groundStations = parseGroundStationsToml(gsText);

  const report = generateVisibilityReport(satellites, groundStations, startTime, 15, stepMinutes);

  await Bun.write("visibility-report.json", JSON.stringify(report, null, 2));
  console.log("Report written to visibility-report.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
