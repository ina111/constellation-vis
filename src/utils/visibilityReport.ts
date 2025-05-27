import * as satellite from "satellite.js";
import { toSatrec, type SatelliteSpec } from "../data/satellites";
import type { GroundStation } from "../data/groundStations";

export interface VisibilityRecord {
  time: string;
  count: number;
  satellites: string[];
}

export interface VisibilityReport {
  startTime: string;
  stepMinutes: number;
  days: number;
  stations: string[];
  records: Record<string, VisibilityRecord[]>;
}

function satName(spec: SatelliteSpec, idx: number): string {
  return (
    spec.meta?.objectName ??
    spec.meta?.objectId ??
    (spec.meta?.noradCatId !== undefined ? String(spec.meta.noradCatId) : `sat-${idx}`)
  );
}

export function generateVisibilityReport(
  satellites: SatelliteSpec[],
  groundStations: GroundStation[],
  startTime: Date,
  days = 15,
  stepMinutes = 10,
): VisibilityReport {
  const satRecs = satellites.map((s) => toSatrec(s));
  const observerGds = groundStations.map((gs) => ({
    longitude: satellite.degreesToRadians(gs.longitudeDeg),
    latitude: satellite.degreesToRadians(gs.latitudeDeg),
    height: gs.heightKm,
  }));
  const minElRads = groundStations.map((gs) => satellite.degreesToRadians(gs.minElevationDeg));
  const endTime = new Date(startTime.getTime() + days * 24 * 60 * 60 * 1000);
  const records: Record<string, VisibilityRecord[]> = {};
  groundStations.forEach((gs) => {
    records[gs.name] = [];
  });
  for (let t = startTime.getTime(); t <= endTime.getTime(); t += stepMinutes * 60000) {
    const current = new Date(t);
    const gmst = satellite.gstime(current);
    const satPos = satRecs.map((rec) => satellite.propagate(rec, current).position);
    const satEcfs = satPos.map((pos) => (pos ? satellite.eciToEcf(pos, gmst) : null));
    groundStations.forEach((gs, gi) => {
      const visible: string[] = [];
      satEcfs.forEach((ecf, si) => {
        if (!ecf) return;
        const look = satellite.ecfToLookAngles(observerGds[gi], ecf);
        if (look.elevation > minElRads[gi]) {
          visible.push(satName(satellites[si], si));
        }
      });
      records[gs.name].push({
        time: current.toISOString(),
        count: visible.length,
        satellites: visible,
      });
    });
  }
  return {
    startTime: startTime.toISOString(),
    stepMinutes,
    days,
    stations: groundStations.map((gs) => gs.name),
    records,
  };
}
