// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {getAll,getById, verifyEmail} = require('../../controllers/APIs/apiUsersController');

// /api/users

router
    .get('/', getAll)
    .get('/:id', getById)
    .post('/verify-email',verifyEmail)

module.exports = router;
