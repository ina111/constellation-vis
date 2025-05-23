import { useEffect, useState } from "react";

const pad = (n: number) => n.toString().padStart(2, "0");
const formatForInput = (d: Date) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;

import type { SatelliteSpec } from "../satellites";
import type { GroundStation } from "../groundStations";
import {
  parseSatellitesToml,
  parseConstellationToml,
  parseGroundStationsToml,
} from "../utils/tomlParse";

interface Props {
  onUpdate: (sats: SatelliteSpec[], stations: GroundStation[]) => void;
  startTime: Date;
  onStartTimeChange: (date: Date) => void;
}

export default function SatelliteEditor({ onUpdate, startTime, onStartTimeChange }: Props) {
  const [satText, setSatText] = useState("");
  const [constText, setConstText] = useState("");
  const [gsText, setGsText] = useState("");
  const [open, setOpen] = useState(false);
  const [startStr, setStartStr] = useState(formatForInput(startTime));

  useEffect(() => {
    setStartStr(formatForInput(startTime));
  }, [startTime]);

  const satInputRef = useRef<HTMLInputElement | null>(null);
  const constInputRef = useRef<HTMLInputElement | null>(null);
  const gsInputRef = useRef<HTMLInputElement | null>(null);

  function downloadFile(name: string, text: string) {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleFileLoad<T>(
    file: File,
    setter: (t: string) => void,
    parser: (t: string) => T,
    validator?: (v: T) => void,
  ) {
    const text = await file.text();
    try {
      const parsed = parser(text);
      if (validator) validator(parsed);
      setter(text);
    } catch (e) {
      alert("Invalid file: " + (e as Error).message);
    }
  }

  function validateSatellites(list: SatelliteSpec[]) {
    for (const s of list) {
      if (s.type === "tle") {
        if (!s.lines[0] || !s.lines[1]) {
          throw new Error("satellites.toml: missing TLE lines");
        }
      } else if (s.type === "elements") {
        const e = s.elements;
        if (
          e.satnum === undefined ||
          !(e.epoch instanceof Date) ||
          Number.isNaN(e.semiMajorAxisKm) ||
          Number.isNaN(e.eccentricity) ||
          Number.isNaN(e.inclinationDeg) ||
          Number.isNaN(e.raanDeg) ||
          Number.isNaN(e.argPerigeeDeg) ||
          Number.isNaN(e.meanAnomalyDeg)
        ) {
          throw new Error("satellites.toml: incomplete elements entry");
        }
      }
    }
  }

  function validateGroundStations(list: GroundStation[]) {
    for (const g of list) {
      if (!g.name || Number.isNaN(g.latitudeDeg) || Number.isNaN(g.longitudeDeg)) {
        throw new Error("groundstations.toml: missing required fields");
      }
    }
  }

  useEffect(() => {
    fetch("/satellites.toml")
      .then((r) => r.text())
      .then(setSatText);
    fetch("/constellation.toml")
      .then((r) => r.text())
      .then(setConstText)
      .catch(() => setConstText(""));
    fetch("/groundstations.toml")
      .then((r) => r.text())
      .then(setGsText)
      .catch(() => setGsText(""));
  }, []);

  const handleUpdate = () => {
    try {
      const base = parseSatellitesToml(satText);
      const con = constText ? parseConstellationToml(constText) : [];
      const gs = parseGroundStationsToml(gsText);
      validateSatellites([...base, ...con]);
      validateGroundStations(gs);
      onUpdate([...base, ...con], gs);
    } catch (e) {
      alert("Failed to parse files: " + (e as Error).message);
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "absolute",
            left: 8,
            top: 8,
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            border: "none",
            padding: "4px 8px",
            fontSize: "1.2rem",
            zIndex: 30,
          }}
        >
          ☰
        </button>
      )}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: 300,
          maxWidth: "80%",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          padding: 8,
          fontFamily: "monospace",
          zIndex: 20,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-out",
          boxSizing: "border-box",
        }}
      >
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            right: 8,
            top: 8,
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "1.2rem",
          }}
        >
          ✕
        </button>
        <div style={{ paddingTop: 24 }}>
          <div>Start time (local)</div>
          <div style={{ display: "flex", gap: 4 }}>
            <input
              type="datetime-local"
              value={startStr}
              onChange={(e) => setStartStr(e.target.value)}
              style={{ width: "100%" }}
            />
            <button
              onClick={() => {
                const d = new Date(startStr);
                if (!isNaN(d.getTime())) onStartTimeChange(d);
              }}
            >
              Set
            </button>
          </div>
        </div>
        <div style={{ paddingTop: 24 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>satellites.toml</span>
            <button
              onClick={() => downloadFile("satellites.toml", satText)}
              style={{ marginLeft: 4, background: "transparent", border: "none", color: "#fff" }}
            >
              💾
            </button>
            <button
              onClick={() => satInputRef.current?.click()}
              style={{ marginLeft: 4, background: "transparent", border: "none", color: "#fff" }}
            >
              📂
            </button>
            <input
              ref={satInputRef}
              type="file"
              accept=".toml"
              style={{ display: "none" }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFileLoad(f, setSatText, parseSatellitesToml, validateSatellites);
                e.target.value = "";
              }}
            />
          </div>
          <textarea
            value={satText}
            onChange={(e) => setSatText(e.target.value)}
            style={{ width: "100%", height: 80 }}
          />
        </div>
        <div style={{ marginTop: 4 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>constellation.toml</span>
            <button
              onClick={() => downloadFile("constellation.toml", constText)}
              style={{ marginLeft: 4, background: "transparent", border: "none", color: "#fff" }}
            >
              💾
            </button>
            <button
              onClick={() => constInputRef.current?.click()}
              style={{ marginLeft: 4, background: "transparent", border: "none", color: "#fff" }}
            >
              📂
            </button>
            <input
              ref={constInputRef}
              type="file"
              accept=".toml"
              style={{ display: "none" }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFileLoad(f, setConstText, parseConstellationToml, validateSatellites);
                e.target.value = "";
              }}
            />
          </div>
          <textarea
            value={constText}
            onChange={(e) => setConstText(e.target.value)}
            style={{ width: "100%", height: 80 }}
          />
        </div>
        <div style={{ marginTop: 4 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>groundstations.toml</span>
            <button
              onClick={() => downloadFile("groundstations.toml", gsText)}
              style={{ marginLeft: 4, background: "transparent", border: "none", color: "#fff" }}
            >
              💾
            </button>
            <button
              onClick={() => gsInputRef.current?.click()}
              style={{ marginLeft: 4, background: "transparent", border: "none", color: "#fff" }}
            >
              📂
            </button>
            <input
              ref={gsInputRef}
              type="file"
              accept=".toml"
              style={{ display: "none" }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFileLoad(f, setGsText, parseGroundStationsToml, validateGroundStations);
                e.target.value = "";
              }}
            />
          </div>
          <textarea
            value={gsText}
            onChange={(e) => setGsText(e.target.value)}
            style={{ width: "100%", height: 80 }}
          />
        </div>
        <button onClick={handleUpdate} style={{ marginTop: 4 }}>
          Update
        </button>
      </div>
    </>
  );
}
