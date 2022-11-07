const db = require('../database/models');

module.exports = {
    register : (req,res) => {
        return res.render('userRegister')
    },
    processRegister : (req,res) => {

    },
    login : (req,res) => {
        return res.render('userLogin')
    },
    processLogin : (req,res) => {

    },
    profile : (req,res) => {

    },
    updateProfile : (req,res) => {

    },
    logout : (req,res) => {

    },
    remove : (req,res) => {
        
    }
}