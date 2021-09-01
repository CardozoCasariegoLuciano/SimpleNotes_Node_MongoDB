const router = require("express").Router()
const {getAllNotes, getANote, postNewNote, deleteNote, editNote, getMyNotes} = require("../controller/note.controller")
const token_validation = require("../middleware/token_validation")

router.route("/")
	.get(token_validation ,getAllNotes)
	.post(token_validation, postNewNote)

router.route("/mynotes")
	.get(token_validation, getMyNotes)

router.route("/:id")
	.get(token_validation , getANote)
	.delete(token_validation, deleteNote)
	.put(token_validation, editNote)



module.exports = router

