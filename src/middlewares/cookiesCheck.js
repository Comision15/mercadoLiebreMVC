module.exports = (req,res,next) => {

    if(req.cookies.mercadoLiebre16){
        req.session.userLogin = req.cookies.mercadoLiebre16
    }
    next()
}