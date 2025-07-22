const express = require('express');
const fs = require('fs');
const path = require('path');

// Initialize Express app
const app = express();

// Get the port from environment variable or use 3000 as default
const PORT = process.env.PORT || 3000;

// Preload the pixel image
let pixelBuffer;
try {
  pixelBuffer = fs.readFileSync(path.join(__dirname, 'pixel.gif'));
} catch (error) {
  console.error('Error loading pixel.gif:', error);
  process.exit(1);
}

// Root route
app.get('/', (req, res) => {
  res.send('Pixel server is running');
});

// Tracking pixel route
app.get('/track', (req, res) => {
  const email = req.query.email || 'unknown';
  const timestamp = new Date().toISOString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'] || 'unknown';
  
  // Log tracking information
  console.log(`Email opened: ${email} | Time: ${timestamp} | IP: ${ip} | User Agent: ${userAgent}`);
  
  // Set appropriate headers for the image
  res.set('Content-Type', 'image/gif');
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  
  // Send the pixel image
  res.send(pixelBuffer);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Tracking URL: http://localhost:${PORT}/track?email=example@domain.com`);
}); 