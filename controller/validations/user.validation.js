const Joi = require("joi")

const userValidation = Joi.object({
	name: Joi.string(),
	password: Joi.string().pattern(new RegExp( "^[a-zA-Z0-9]{3,35}$" )),
	email: Joi.string().email()
})

module.exports = userValidation
