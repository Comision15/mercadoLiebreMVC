// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {getTotals} = require('../../controllers/APIs/apiMainController');

// /api

router
    .get('/totals', getTotals)

module.exports = router;