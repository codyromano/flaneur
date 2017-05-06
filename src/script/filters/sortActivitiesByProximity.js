const haversine = require('haversine'),
  settings = {unit: 'mile'};

// TODO: Move into general validators file
const isLocation = any => {
  return typeof any === 'object' && any !== null &&
    'location' in any && 'about' in any;
};

export default function sortActivitiesByProximity(latitude, longitude) {
  if (isNaN(latitude) || isNaN(longitude)) {
    throw new TypeError(`Invalid latitude or longitude`);
  }

  return (a, b) => {
    if (![a, b].every(isLocation)) {
      throw new Error(`Cannot sort locations because one or more loc
        objects is invalid.`);
    }

    const userCoords = {latitude, longitude};

    const coordsA = {
      latitude: a.location[0],
      longitude: a.location[1]
    };
    
    const coordsB = {
      latitude: b.location[0],
      longitude: b.location[1]
    };

    const distanceA = haversine(userCoords, coordsA, settings),
      distanceB = haversine(userCoords, coordsB, settings);

    return distanceA > distanceB ? 1 : -1;
  };
}