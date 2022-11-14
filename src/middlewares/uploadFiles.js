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

const upload = multer({
    storage : storageImageProduct
});

module.exports = {
    upload
}