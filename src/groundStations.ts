// Helper utilities for loading ground station definitions
import { parseGroundStationsToml, type GroundStation } from './utils/tomlParse';

/** Fetch and parse the ground station list */
export async function loadGroundStations(): Promise<GroundStation[]> {
  const resp = await fetch('/groundstations.toml');
  const text = await resp.text();
  return parseGroundStationsToml(text);
}

export type { GroundStation };
