import { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import type { GlobeMethods } from 'react-globe.gl'
import {
  keplerian2satrec,
  propagate,
  gstime,
  eciToGeodetic,
  degreesLat,
  degreesLong,
} from 'satellite.js'

function App() {
  // use a null default value so the ref type matches React's expectations
  const globeEl = useRef<GlobeMethods | null>(null)
  const [satPoint, setSatPoint] = useState<{ lat: number; lng: number; alt: number } | null>(null)

  useEffect(() => {
    globeEl.current?.pointOfView({ lat: 0, lng: 0, altitude: 2 }, 0)
  }, [])

  useEffect(() => {
    // Example orbital elements (KEP) for a near-circular low Earth orbit
    const elements = {
      epoch: new Date(),
      a: 6780, // semi-major axis in km
      ecc: 0.001,
      argp: 0,
      incl: 51.6 * (Math.PI / 180),
      meanAnomaly: 0,
      raan: 0,
      bstar: 0,
    }

    const satrec = keplerian2satrec(elements)

    const timer = setInterval(() => {
      const date = new Date()
      const { position } = propagate(satrec, date)
      if (position) {
        const gmst = gstime(date)
        const geodetic = eciToGeodetic(position, gmst)
        setSatPoint({
          lat: degreesLat(geodetic.latitude),
          lng: degreesLong(geodetic.longitude),
          alt: geodetic.height,
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        pointsData={satPoint ? [satPoint] : []}
        pointColor={() => 'red'}
      />
    </div>
  )
}

export default App
