const routes = require("express").Router();
const {getAllUsers, getASingleUser, postANewUser} = require("../controller/user.controller")



routes.route("/")
	.get(getAllUsers)
	.post(postANewUser)


routes.route("/:id")
	.get(getASingleUser)


module.exports = routes;
