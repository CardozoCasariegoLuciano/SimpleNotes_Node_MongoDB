const Joi = require("joi")

const NoteValidation = Joi.object({
	title: Joi.string(),
	description: Joi.string(),
})

module.exports = NoteValidation
