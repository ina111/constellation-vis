import type { SatelliteSpec } from "./satellites";

const SATELLITES: SatelliteSpec[] = [
  {
    type: "tle",
    lines: [
      "1 25544U 98067A   25140.43166667  .00016717  00000+0  10270-3 0  9997",
      "2 25544  51.6444  22.7332 0003643  46.9050   7.5185 15.49594111445576"
    ]
  },
  {
    type: "tle",
    lines: [
      "1 70000U 23000A   25140.35000000  .00005300  00000+0  10000-3 0  9996",
      "2 70000  53.0000 222.0000 0001200   0.0000  90.0000 15.00000000    04"
    ]
  },
  {
    type: "tle",
    lines: [
      "1 25338U 98030A   25140.39097223  .00000079  00000+0  70891-4 0  9992",
      "2 25338  98.7036 169.2466 0011424 193.2015 166.8760 14.25842724203160"
    ]
  },
  {
    type: "elements",
    elements: {
      satnum: 90001,
      epoch: new Date("2025-05-20T00:00:00.000Z"),
      semiMajorAxisKm: 7000,
      eccentricity: 0.001,
      inclinationDeg: 40,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 0
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100000,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 0
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100001,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 32.72727272727273
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100002,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 65.45454545454545
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100003,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 98.18181818181819
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100004,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 130.9090909090909
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100005,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 163.63636363636363
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100006,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 196.36363636363637
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100007,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 229.0909090909091
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100008,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 261.8181818181818
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100009,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 294.54545454545456
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100010,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 0,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 327.27272727272725
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100011,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 60,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 10.909090909090908
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100012,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 60,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 43.63636363636363
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100013,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 60,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 76.36363636363636
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100014,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 60,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 109.0909090909091
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100015,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 60,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 141.8181818181818
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100016,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 60,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 174.54545454545453
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100017,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 60,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 207.27272727272728
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100018,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 60,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 240
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100019,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 60,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 272.72727272727275
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100020,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 60,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 305.4545454545455
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100021,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 60,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 338.1818181818182
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100022,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 120,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 21.818181818181817
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100023,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 120,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 54.54545454545455
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100024,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 120,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 87.27272727272727
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100025,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 120,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 120
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100026,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 120,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 152.72727272727272
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100027,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 120,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 185.45454545454544
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100028,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 120,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 218.1818181818182
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100029,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 120,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 250.9090909090909
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100030,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 120,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 283.6363636363636
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100031,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 120,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 316.3636363636364
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100032,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 120,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 349.09090909090907
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100033,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 180,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 32.72727272727273
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100034,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 180,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 65.45454545454545
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100035,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 180,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 98.18181818181819
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100036,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 180,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 130.9090909090909
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100037,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 180,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 163.63636363636363
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100038,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 180,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 196.36363636363635
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100039,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 180,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 229.0909090909091
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100040,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 180,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 261.8181818181818
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100041,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 180,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 294.54545454545456
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100042,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 180,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 327.2727272727273
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100043,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 180,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 360
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100044,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 240,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 43.63636363636363
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100045,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 240,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 76.36363636363636
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100046,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 240,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 109.0909090909091
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100047,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 240,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 141.8181818181818
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100048,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 240,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 174.54545454545453
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100049,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 240,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 207.27272727272725
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100050,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 240,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 240
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100051,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 240,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 272.72727272727275
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100052,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 240,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 305.45454545454544
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100053,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 240,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 338.1818181818182
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100054,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 240,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 370.9090909090909
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100055,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 300,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 54.54545454545454
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100056,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 300,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 87.27272727272727
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100057,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 300,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 120
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100058,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 300,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 152.72727272727272
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100059,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 300,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 185.45454545454544
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100060,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 300,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 218.18181818181816
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100061,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 300,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 250.9090909090909
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100062,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 300,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 283.6363636363636
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100063,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 300,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 316.3636363636364
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100064,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 300,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 349.0909090909091
    }
  },
  {
    type: "elements",
    elements: {
      satnum: 100065,
      epoch: new Date("2025-05-22T00:00:00.000Z"),
      semiMajorAxisKm: 6920.30796920308,
      eccentricity: 0.0001,
      inclinationDeg: 53,
      raanDeg: 300,
      argPerigeeDeg: 0,
      meanAnomalyDeg: 381.8181818181818
    }
  }
];

export default SATELLITES;
