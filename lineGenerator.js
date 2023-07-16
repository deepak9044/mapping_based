const turf = require('@turf/turf');

function generateRandomLines(count) {
  const lines = [];

  for (let i = 1; i <= count; i++) {
    const start = turf.randomPosition();
    const end = turf.randomPosition();
    const line = turf.lineString([start, end], { id: `L${i.toString().padStart(2, '0')}` });
    lines.push(line);
  }

  return lines;
}

module.exports = { generateRandomLines };
