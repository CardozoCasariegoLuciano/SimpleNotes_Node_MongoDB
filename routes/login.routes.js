const routes = require("express").Router()
const {login} = require("../controller/login.controller")

routes.route("/")
	.post(login)

module.exports = routes
