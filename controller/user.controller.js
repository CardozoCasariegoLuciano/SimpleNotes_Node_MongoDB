const User = require("../models/user.model")
const userValidation = require("./validations/user.validation")
const objectId = require("mongoose").Types.ObjectId

async function getAllUsers(req, res){

	const allUsers = await User.find()
	res.json(allUsers)
}

async function getASingleUser(req, res){

	const id = req.params.id;

	if(!objectId.isValid(id)){
		return res.status(400).json({Mensaje : "Ingrese un ID valido"})	
	}

	const user = await User.findById(id)
	if(!user){
		res.json({Mensaje:` El usuario con el id ${id} no existe`})
	}else{
		res.json(user)
	}
}

async function postANewUser(req, res){
	const {name, password, email} = req.body;

	const exist = await User.findOne({email})

	if(!exist){

		const {error, value} = userValidation.validate({name, password ,email})

		if(!error){
			const newUser = new User(value)
			await newUser.save()	
			res.json({Mensaje: "Usuario agregado exitosamente", Data: newUser})

		}else{
			res.status(400).json({ Mensaje : "Error con los datos ingresados" })
		}

	}else{
		res.status(400).json({ Mensaje : "El mail seleccionado ya existe" })
	}

}

module.exports = {
	getAllUsers,
	getASingleUser,
	postANewUser,
}
