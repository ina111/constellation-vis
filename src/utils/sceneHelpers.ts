import * as THREE from "three";
import * as satellite from "satellite.js";

const DEG2RAD = Math.PI / 180;

export function greenwichSiderealAngle(date: Date): number {
  const jd = satellite.jday(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds() + date.getUTCMilliseconds() / 1000,
  );
  const T = (jd - 2451545.0) / 36525.0;
  let gmst =
    280.46061837 +
    360.98564736629 * (jd - 2451545.0) +
    0.000387933 * T * T -
    (T * T * T) / 38710000;
  gmst = ((gmst % 360) + 360) % 360;
  return gmst * DEG2RAD;
}

export function sunVectorECI(date: Date): { x: number; y: number; z: number } {
  const jd = satellite.jday(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds() + date.getUTCMilliseconds() / 1000,
  );

  const T = (jd - 2451545.0) / 36525.0;
  const L = ((280.460 + 36000.770 * T) % 360) * DEG2RAD;
  const g = ((357.528 + 35999.050 * T) % 360) * DEG2RAD;
  const lambda = L + (1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)) * DEG2RAD;
  const epsilon = (23.4393 - 0.0130 * T) * DEG2RAD;

  const xs = Math.cos(lambda);
  const ys = Math.cos(epsilon) * Math.sin(lambda);
  const zs = Math.sin(epsilon) * Math.sin(lambda);
  return { x: xs, y: ys, z: zs };
}

export function createGraticule(stepDeg = 20): THREE.LineSegments {
  const vertices: number[] = [];
  const material = new THREE.LineBasicMaterial({ color: 0xdcdcdc, linewidth: 0.1 });

  for (let lon = -180; lon <= 180; lon += stepDeg) {
    for (let lat = -90; lat < 90; lat += 2) {
      const lat1 = lat * DEG2RAD;
      const lat2 = (lat + 2) * DEG2RAD;
      const lonRad = lon * DEG2RAD;
      vertices.push(
        Math.cos(lat1) * Math.cos(lonRad),
        Math.sin(lat1),
        -Math.cos(lat1) * Math.sin(lonRad),
        Math.cos(lat2) * Math.cos(lonRad),
        Math.sin(lat2),
        -Math.cos(lat2) * Math.sin(lonRad),
      );
    }
  }

  for (let lat = -80; lat <= 80; lat += stepDeg) {
    const latRad = lat * DEG2RAD;
    for (let lon = -180; lon < 180; lon += 2) {
      const lon1 = lon * DEG2RAD;
      const lon2 = (lon + 2) * DEG2RAD;
      vertices.push(
        Math.cos(latRad) * Math.cos(lon1),
        Math.sin(latRad),
        -Math.cos(latRad) * Math.sin(lon1),
        Math.cos(latRad) * Math.cos(lon2),
        Math.sin(latRad),
        -Math.cos(latRad) * Math.sin(lon2),
      );
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  return new THREE.LineSegments(geometry, material);
}

export function createEclipticLine(stepDeg = 2): THREE.Line {
  const tilt = 23.4393 * DEG2RAD;
  const verts: number[] = [];
  for (let lon = 0; lon <= 360; lon += stepDeg) {
    const rad = lon * DEG2RAD;
    const x = Math.cos(rad);
    const y = Math.sin(rad) * Math.sin(tilt);
    const z = -Math.sin(rad) * Math.cos(tilt);
    verts.push(x, y, z);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  const material = new THREE.LineBasicMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.4,
    linewidth: 1,
  });
  return new THREE.Line(geometry, material);
}
