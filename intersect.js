const turf = require('@turf/turf');

function findIntersectingLines(lineString, lines) {
  const intersectingLines = [];

  for (const line of lines) {
    const intersection = turf.lineIntersect(lineString, line);

    if (intersection.features.length > 0) {
      const lineId = line.properties.id;
      const intersectionPoint = intersection.features[0].geometry.coordinates;

      intersectingLines.push({ lineId, intersectionPoint });
    }
  }

  return intersectingLines;
}

module.exports = { findIntersectingLines };
