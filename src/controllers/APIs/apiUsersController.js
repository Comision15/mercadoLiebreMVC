const db = require('../../database/models')

module.exports = {
    getAll : async (req,res) => {

    },
    getById : (req,res) => {
        
    },
    verifyEmail : async (req,res) => {

        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',req.body)
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