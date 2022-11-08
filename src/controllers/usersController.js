const db = require('../database/models');

module.exports = {
    register : (req,res) => {
        return res.render('userRegister')
    },
    processRegister : (req,res) => {
        return res.send(req.body)
    },
    login : (req,res) => {
        return res.render('userLogin')
    },
    processLogin : (req,res) => {
        return res.send(req.body)
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