const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// API endpoint for CSV data
app.get('/api/data', (req, res) => {
  const csvPath = path.join(__dirname, 'data.csv');
  fs.readFile(csvPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Could not read data file' });
    }
    res.setHeader('Content-Type', 'text/csv');
    res.send(data);
  });
});

// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'Stadtwerke Kontakte Sample'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  console.log(`📊 Sample data available at /api/data`);
});
