const db = require('../../database/models')
module.exports = {
    list : async (req,res) => {
        try {

            let {count, rows : products} = await db.Product.findAndCountAll({
                attributes : ['id','name','price']
            })

            return res.status(200).json({
                ok: true,
                total : count,
                products
            })
            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || "Comunicate con el administrador"
            })
        }
    },
    detail : async (req,res) => {

    },
    store : async (req,res) => {

    },
    update : async (req,res) => {

    },
    remove : async (req,res) => {

    },
}