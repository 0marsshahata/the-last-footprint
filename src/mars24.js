// Where the Sun is over Mars right now — NASA GISS "Mars24" algorithm (Allison & McEwen 2000).
// Gives the subsolar point (planetocentric latitude / east longitude) so the globe's day and night are real.
const d2r = Math.PI / 180;

export function marsSun(date = new Date()) {
  const jdUT = date.getTime() / 86400000 + 2440587.5;
  const jdTT = jdUT + (37 + 32.184) / 86400;          // TAI-UTC = 37 s since 2017
  const dt = jdTT - 2451545.0;                          // days since J2000 (TT)
  const M = (19.3871 + 0.52402073 * dt) * d2r;          // mean anomaly
  const aFMS = 270.3871 + 0.524038496 * dt;             // fictitious mean sun
  // perturbations by the other planets (A, tau, phi)
  const P = [[0.0071, 2.2353, 49.409], [0.0057, 2.7543, 168.173], [0.0039, 1.1177, 191.837], [0.0037, 15.7866, 21.736],
    [0.0021, 2.1354, 15.704], [0.002, 2.4694, 95.528], [0.0018, 32.8493, 49.095]];
  const pbs = P.reduce((s, [A, tau, phi]) => s + A * Math.cos(((0.985626 * dt) / tau + phi) * d2r), 0);
  const vMinusM = (10.691 + 3.0e-7 * dt) * Math.sin(M) + 0.623 * Math.sin(2 * M) + 0.05 * Math.sin(3 * M)
    + 0.005 * Math.sin(4 * M) + 0.0005 * Math.sin(5 * M) + pbs;
  const Ls = ((aFMS + vMinusM) % 360 + 360) % 360;      // areocentric solar longitude (season)
  const eot = 2.861 * Math.sin(2 * Ls * d2r) - 0.071 * Math.sin(4 * Ls * d2r) + 0.002 * Math.sin(6 * Ls * d2r) - vMinusM; // degrees
  const msd = (dt - 4.5) / 1.0274912517 + 44796.0 - 0.0009626; // Mars sol date
  const mtc = ((24 * msd) % 24 + 24) % 24;              // coordinated Mars time (hours)
  const subWest = ((mtc * 15 + eot + 180) % 360 + 360) % 360;
  const subEast = ((360 - subWest) % 360 + 360) % 360;
  const decl = Math.asin(0.42565 * Math.sin(Ls * d2r)) / d2r + 0.25 * Math.sin(Ls * d2r);
  return { Ls, msd, mtc, lat: decl, lonE: subEast > 180 ? subEast - 360 : subEast };
}

// unit vector for a planetocentric latitude / east longitude, in the globe's local frame
// (matches three.js SphereGeometry UVs with a map whose left edge is 180°W and centre is 0°)
export function latLonToVec(lat, lonE, out) {
  const B = lat * d2r, L = lonE * d2r;
  return out.set(Math.cos(L) * Math.cos(B), Math.sin(B), -Math.sin(L) * Math.cos(B));
}

// local solar time at a site, in hours (12 = noon)
export function localSolarHour(sun, lonE) {
  let h = 12 + (lonE - sun.lonE) / 15;
  return ((h % 24) + 24) % 24;
}
