const fs = require('fs');

module.exports = (errors, req) => {
    let errorMessages = {};
    let errorsObject = errors.mapped();

    if(req.files){
        req.files.forEach(file => {
            fs.unlinkSync('public/images/products/' + file.filename)
        })
    } 

    if(req.fileValidationError){
        errorsObject = {
            ...errorsObject,
            images : {
                msg : req.fileValidationError
            }
        }
    }

    for (const key in errorsObject) {
        console.log(key, [key])
        errorMessages = {
            ...errorMessages,
            [key] : errorsObject[key].msg
        }
    }

    let error = new Error()
    error.status = 400;
    error.message = errorMessages
    
    return error

}