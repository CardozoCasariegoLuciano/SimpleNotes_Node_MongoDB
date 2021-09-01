const Note = require("../models/note.model");
const objectId = require("mongoose").Types.ObjectId;
const NoteValidation = require("./validations/note.validation");

async function getAllNotes(req, res) {
	const allNotes = await Note.find().populate("author", "name email");
	res.json(allNotes);
}

async function getANote(req, res) {
	const id = req.params.id;

	const isAValidId = objectId.isValid(id);
	if (!isAValidId) {
		return res.status(400).json({ Mensaje: "Ingrese un ID valido" });
	}

	const note = await Note.findById(id).populate("author", "name email");

	if (note) {
		res.json(note);
	} else {
		res.status(400).json({ Mensaje: `No existe la nota con ID: ${id}` });
	}
}

async function postNewNote(req, res) {
	const { title, description } = req.body;

	const { error, value } = NoteValidation.validate({
		title,
		description,
	});

	if (!error) {
		const newNote = new Note({
			...value,
			author: req.user._id,
		});

		await newNote.save();
		res.json({ Mensaje: "Nota agregada correctamente", Nota: newNote });
	} else {
		res.status(400).json({ Mensaje: "Error con los datos ingresados", error });
	}
}

async function deleteNote(req, res) {
	const id = req.params.id;

	const isAValidId = objectId.isValid(id);
	if (!isAValidId) {
		return res.status(400).json({ Mensaje: "Ingrese un ID valido" });
	}

	const note = await Note.findByIdAndDelete(id);

	if (note) {
		res.json({ Mensaje: "Nota eliminada", Nota_borrada: note });
	} else {
		res.status(400).json({ Mensaje: `No existe la nota con ID: ${id}` });
	}
}

async function editNote(req, res) {
	const id = req.params.id;
	const { title, description } = req.body;

	const isAValidId = objectId.isValid(id);
	if (!isAValidId) {
		return res.status(400).json({ Mensaje: "Ingrese un ID valido" });
	}

	const { error, value } = NoteValidation.validate({ title, description });

	if (!error) {
		const note = await Note.findById(id);

		if (note) {
			note.title = value.title;
			note.description = value.description;

			await note.save();

			res.json({
				Mensaje: "Nota modificada",
				Datos_nuevos: { title: note.title, description: note.description },
			});
		} else {
			res.status(400).json({ Mensaje: `No existe la nota con ID: ${id}` });
		}
	} else {
		res.status(400).json({ Mensaje: "Error con los datos ingresados", error });
	}
}

async function getMyNotes(req,res){
	const myID  = req.user._id

	const mynotes = await Note.find({author : req.user}).populate("author", "name email")

	res.json(mynotes)
}

module.exports = {
	getAllNotes,
	getANote,
	postNewNote,
	deleteNote,
	editNote,
	getMyNotes,
};
