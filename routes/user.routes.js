const routes = require("express").Router();
const {getAllUsers, getASingleUser,  deleteAUser, editAUser} = require("../controller/user.controller")
const token_validation = require("../middleware/token_validation")



routes.route("/")
	.get(token_validation, getAllUsers)

routes.route("/:id")
	.get(token_validation, getASingleUser)
	.delete(token_validation, deleteAUser)
	.put(token_validation, editAUser)

module.exports = routes;
