# Constellation Viewer

A minimal web application to visualize Earth and satellites in orbit in real time using React, TypeScript, Vite, Three.js, and satellite.js.

## Features

- Render a 3D Earth with realistic texture and graticule lines.
- Visualize satellite positions and ground tracks from TLE data.
- Adjustable simulation speed (1×–100× real time) via slider.
- Interactive orbit controls for zooming, rotating, and panning.
- Display current simulated UTC date and time.
- Responsive viewport that adjusts on window resize.

## Prerequisites

- Node.js ≥16 or [bun](https://bun.sh/) (optional)
- npm, yarn, or bun for package management

## Installation

```bash
# Using npm
npm install

# Using bun
bun install
```

## Development

Start the development server with hot module replacement:

```bash
npm run dev
# or bun dev
```

Open your browser and visit `http://localhost:5173`.


## Satellite data

Satellite information is loaded from `public/satellites.toml` and
`public/constellation.toml` when running the build scripts.  The latter can
define a constellation using Walker-Δ style parameters:

```toml
[constellation]
name  = "ExampleConstellation"
epoch = 2025-05-22T00:00:00Z

[[constellation.shells]]
count       = 66
planes      = 6
phasing     = 2
apogee_altitude = 550
eccentricity = 0.0001
inclination  = 53.0
```


## Deployment
https://constellation-vis-919f.vercel.app/
