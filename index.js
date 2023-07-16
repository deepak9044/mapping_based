const express = require('express');
const bodyParser = require('body-parser');
const turf = require('@turf/turf');

const { authenticateRequest } = require('./auth');
const { findIntersectingLines } = require('./intersect');
const { generateRandomLines } = require('./lineGenerator');

const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// POST endpoint for finding intersecting lines

    // TODO: Implement the intersection logic

    app.post('/api/intersect', authenticateRequest, (req, res) => {
        try {
          const lineString = req.body;
      
          // Validate the input lineString
          if (lineString.type !== 'LineString' || !Array.isArray(lineString.coordinates)) {
            return res.status(400).json({ error: 'Invalid lineString' });
          }
      
          // Generate 50 random lines
          const lines = generateRandomLines(50);
      
          // Find intersecting lines
          const intersectingLines = findIntersectingLines(lineString, lines);
      
          res.json(intersectingLines);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });
      
      // Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
