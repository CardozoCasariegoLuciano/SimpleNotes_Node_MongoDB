const User = require("../models/user.model")
const userValidation = require("./validations/user.validation")
const objectId = require("mongoose").Types.ObjectId
const bcrypt = require("bcrypt")


async function getAllUsers(req, res){

	const allUsers = await User.find().select({password: 0})
	res.json(allUsers)
}

async function getASingleUser(req, res){

	const id = req.params.id;

	if(!objectId.isValid(id)){
		return res.status(400).json({Mensaje : "Ingrese un ID valido"})	
	}

	const user = await User.findById(id).select({password:0})
	if(!user){
		res.json({Mensaje:` El usuario con el id ${id} no existe`})
	}else{
		res.json(user)
	}
}


async function deleteAUser(req, res){

	const id = req.params.id

	if(!objectId.isValid(id)){
		return res.status(400).json({Mensaje : "Ingrese un ID valido"})	
	}

	const user = await User.findById(id)
	if(!user){
		res.json({Mensaje:` El usuario con el id ${id} no existe`})
	}else{
		await User.findByIdAndDelete(id)
		res.json({Mensaje: "Usuario eliminado correctamente", Usualio_Elimminado:user})
	}
}


async function editAUser (req, res){

	const id = req.params.id
	const {name, password} = req.body

	if(!objectId.isValid(id)){
		return res.status(400).json({Mensaje : "Ingrese un ID valido"})	
	}

	const user = await User.findById(id)
	if(!user){
		res.json({Mensaje:` El usuario con el id ${id} no existe`})
	}else{

		const {error, value} = userValidation.validate({name, password})

		if(!error){
			user.name = name
			user.password = bcrypt.hashSync(password,10)
			
			await user.save()
			res.json({Mensaje: "Usuario modificado correctamente", Usualio_Modificado:user.email})
		}else{
			res.status(400).json({ Mensaje : "Error con los datos ingresados" })
		}
	}
}

module.exports = {
	getAllUsers,
	getASingleUser,
	deleteAUser,
	editAUser,
}
