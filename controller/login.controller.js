const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
const bcrypt = require("bcrypt")

async function login (req, res){
	const {email, password} = req.body

	const user = await User.findOne({email})
	const correctPassword = user && bcrypt.compareSync(password ,user.password)

	if(!user || (user && !correctPassword)){
		res.json({Mensaje: "Mail o contraceña incorrectos"})
	}else{
		const jwToken = jwt.sign({
			data:{
				name: user.name,
				email: user.email,
				_id: user._id,
			}
		}, process.env.token_seed)

		res.json({
			Mensaje: "Logueado exitosamente",
			Usuario: user,
			Token: jwToken
		})
	}
}


module.exports = {
	login,
}
