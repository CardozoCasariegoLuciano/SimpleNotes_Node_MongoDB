const mongoose = require("mongoose");

const URL = `mongodb://${process.env.DB_host}:${process.env.DB_port}/${process.env.DB_name}`;

async function connectDB() {
	await mongoose.connect(URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log("DataBase conected on port", process.env.DB_port);
}

 connectDB()

