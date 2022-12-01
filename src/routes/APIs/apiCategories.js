// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {list} = require('../../controllers/APIs/apiCategoriesController');

// /api/categories

router
    .get('/', list)

module.exports = router;