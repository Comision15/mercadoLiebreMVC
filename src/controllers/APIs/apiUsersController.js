module.exports = {
    getAll : async (req,res) => {

        try {


            return res.status(200).json({
                count : 12,
                users : [{
                    
                }]
            })
            
        } catch (error) {
            
        }

    },
    getById : (req,res) => {
        
    }
}