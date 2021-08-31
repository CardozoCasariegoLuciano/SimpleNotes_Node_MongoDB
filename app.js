const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()

//Config
app.set("PORT", process.env.PORT || 4000)

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//routes

//app.use("/register", require("./routes/"))
app.use("/api/user", require("./routes/user.routes"))

module.exports = app;
