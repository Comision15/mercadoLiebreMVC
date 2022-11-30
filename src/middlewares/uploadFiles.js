const path = require('path');
const multer = require('multer');

const storageImageProduct = multer.diskStorage({
    destination: (req, file, callback) => {
        if(file.fieldname === 'image1' || file.fieldname === "image2"){
            callback(null, './public/images/products' )
        }
        if(file.fieldname === 'avatar'){
            callback(null, './public/images/users' )
        }
    },
    filename : (req,file,callback) => {
        if(file.fieldname === 'image1' || file.fieldname === "image2"){
            callback(null,'product-' + Date.now() + path.extname(file.originalname))
        }
        if(file.fieldname === 'avatar'){
            callback(null,'avatar-' + Date.now() + path.extname(file.originalname))
        }
    }
    
});


const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
        req.fileValidationError = "Solo se permite imágenes jpg, jpeg, png, gif, webp";
        return callback(null, false, req.fileValidationError)
    }
    return callback(null, true)
}

const upload = multer({
    storage : storageImageProduct
});

module.exports = {
    upload
}