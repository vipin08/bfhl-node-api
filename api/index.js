require('dotenv').config();
const express = require('express');
const routes = require('../src/routes/authRoutes');

const app = express();

app.use(express.json());

app.use('/bfhl', routes);

app.get('/health', (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: 'vipin1589.be23@chitkarauniversity.edu.in'
  });
});

module.exports = app;
