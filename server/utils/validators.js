const { body, validationResult } = require("express-validator");

exports.validate = (validations) => {
    return async(req, res, next) => {
        for(let validation of validations) {
            const result = await validation.run(req);
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(422).json({ 
                    errors: errors.array() 
                });
            }
            next();
        }
    }
}

exports.signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({min: 6}).withMessage("Password Should contain 6 characters")
]