const jwt = require("jsonwebtoken")


async function token_validation(req,res,next){
	const token = req.get("Authorization")

	jwt.verify(token, process.env.token_seed, (eror, decoded)=> {
		if(eror){
			return res.status(401).json({Mensaje: "Usuario no autorizado", Error: eror})
		}else{
			req.user = decoded.data
			next()
		}
	})
}

module.exports = token_validation
