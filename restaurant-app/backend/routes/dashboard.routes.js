const express = require('express');
const router = express.Router();
const dashboard = require('../controllers/dashboard.controller');

router.get('/', dashboard.dashboard);

module.exports = router;
