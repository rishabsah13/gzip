// server.js
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(compression());

// Sample route
app.get('/api/data', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

