const Joi = require("joi")


const userValidation = Joi.object({

	name: Joi.string().min(3),
	password: Joi.string().pattern(new RegExp( "^[a-zA-Z0-9]{3,35}$" )),
	email: Joi.string().email()

})





module.exports = userValidation
