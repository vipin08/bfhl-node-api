const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

const OFFICIAL_EMAIL = "vipin1589.be23@chitkarauniversity.edu.in";

router.post('/', (req, res) => {
  Controller.handleRequest(req, res);
});

router.get('/health', (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: OFFICIAL_EMAIL
  });
});

module.exports = router;
