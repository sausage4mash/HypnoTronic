const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api-key', (req, res) => {
  res.json({ apiKey: process.env.GROQ_API_KEY });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
