const db = require('../../database/models')

module.exports = {
    getAll : async (req,res) => {
        try {

            let {count, rows : users} = await db.User.findAndCountAll({
                attributes : ['id','name','surname','email']
            })

            return res.status(200).json({
                ok : true,
                total : count,
                users
            })
            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Comunicate con el admnistrador'
            })
        }
    },
    getById : (req,res) => {
        
    },
    verifyEmail : async (req,res) => {

        try {
            const {email} = req.body;
            let user = await db.User.findOne({
                where : {
                    email
                }
            })

            return res.status(200).json({
                ok : true,
                verified : user ? true : false
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                error : error.message
            })
        }
    }

}