const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
const userValidation = require("./validations/user.validation")
const bcrypt = require("bcrypt")

async function register(req,res){
	const {name, email, password, repited_password} = req.body

	if(password != repited_password){
		return res.status(400).json({Mensaje: "Las contraceñas no coinciden"})
	}

	const exist = await User.findOne({email})
	if(exist){
		return res.status(400).json({Mensaje: "Ya existe un usuario con ese mail"})
	}

	const {error, value} = userValidation.validate({name, password, email})

	if(!error){
		const newUser = User({
			name,
			email,
			password: bcrypt.hashSync(password, 10) 
		})

		const user = await newUser.save()

		const token = jwt.sign({
			data: {
				_id: user._id,
				name: user.name,
				email: user.email
			}
		}, process.env.token_seed)

		res.json({
			Mensaje: "Registrado correcamente",
			Usuario: {name: user.name, email:user.email},
			Token: token
		})

	}else{
		res.status(400).json({Mensaje: "Error con los datos ingresados", error})
	}
}

module.exports = {register}
