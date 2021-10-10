const {Schema, model} = require("mongoose")

const noteSchema = new Schema({
	title : {
		type: String,
		required: true,
	},
	description: {
		type: String
	},
	publishedOn:{
		type: Date,
		default: Date.now,
	},
	author: {
		type: Schema.Types.ObjectId, ref:"User"
	}
})


module.exports = model("Note", noteSchema)
