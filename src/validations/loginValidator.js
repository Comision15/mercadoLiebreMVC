const {body, check} = require('express-validator');
const db = require('../database/models');
const {compareSync} = require('bcryptjs')

module.exports = [
    check('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('El email no tiene un formato válido'),
    body('pass').custom((value, {req}) => {
        return db.User.findOne({
            where : {
                email : req.body.email
            }
        }).then(user => {
            if(!user || !compareSync(value,user.password)){
                return Promise.reject()
            }
        }).catch(error => Promise.reject('Credenciales inválidas'))
    })
]