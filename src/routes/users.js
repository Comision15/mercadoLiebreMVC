// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {register, processRegister, login, processLogin, profile, updateProfile, logout, remove} = require('../controllers/usersController');
const { upload } = require('../middlewares/uploadFiles');
const userCheck = require('../middlewares/userCheck');
const loginValidator = require('../validations/loginValidator');

router
    .get('/register', register)
    .post('/register', processRegister)
    .get('/login', login)
    .post('/login', loginValidator, processLogin)
    .get('/profile',userCheck, profile)
    .put('/update',upload.single('avatar'), updateProfile)
    .get('/logout',logout)
    .delete('/remove',remove)

module.exports = router;
