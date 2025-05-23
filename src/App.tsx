import { useRef, useEffect, useState } from "react";
import SpeedControl from "./components/SpeedControl";
import SatelliteEditor from "./components/SatelliteEditor";
import { useSatelliteScene } from "./hooks/useSatelliteScene";
import { SATELLITES as INITIAL_SATS } from "./satellites";
import { loadGroundStations, type GroundStation } from "./groundStations";

const INITIAL_SPEED = 60; // initial 60× real time

function App() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const timeRef = useRef<HTMLDivElement | null>(null);

  const [satellites, setSatellites] = useState(INITIAL_SATS);
  const [groundStations, setGroundStations] = useState<GroundStation[]>([]);

  const [startTime, setStartTime] = useState(() => {
    const d = new Date();
    d.setSeconds(0, 0);
    return d;
  });

  // speed exponent slider (0–2 → 1×–100×)
  const [speedExp, setSpeedExp] = useState(Math.log10(INITIAL_SPEED));
  const speedRef = useRef(INITIAL_SPEED);
  useEffect(() => {
    speedRef.current = Math.pow(10, speedExp);
  }, [speedExp]);
  useEffect(() => {
    loadGroundStations().then(setGroundStations);
  }, []);

  useSatelliteScene({
    mountRef,
    timeRef,
    speedRef,
    startTime,
    satellites,
    groundStations,
  });

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      <div
        ref={timeRef}
        style={{
          position: "fixed",
          right: 8,
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 6px)",
          color: "#fff",
          fontFamily: "'Noto Sans Mono', monospace",
          fontVariantNumeric: "tabular-nums",
          fontSize: "0.9rem",
          pointerEvents: "none",
          whiteSpace: "pre",
          textAlign: "right",
          zIndex: 10,
        }}
      />
      <SpeedControl value={speedExp} onChange={setSpeedExp} />
      <SatelliteEditor
        onUpdate={(s, gs, start) => {
          setSatellites(s);
          setGroundStations(gs);
          setStartTime(start);
        }}
      />
    </div>
  );
}

export default App;