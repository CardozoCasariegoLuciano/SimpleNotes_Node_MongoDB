const routes = require("express").Router()
const {register} = require("../controller/register.controller")

routes.route("/")
	.post(register)

module.exports = routes
