const {validationResult} = require('express-validator')

exports.validationMiddleware = (request, response, next)=>{
    let errors = validationResult(request)

    if(!errors.isEmpty()){
        return response.status(400).json({
            errors: errors.array()
        })
    }

    next()
}