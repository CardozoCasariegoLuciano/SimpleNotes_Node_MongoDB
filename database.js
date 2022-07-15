const mongoose = require("mongoose");

const dbName =
  process.env.NODE_ENV === "test"
    ? process.env.DB_TEST_name
    : process.env.DB_name;

const URL = `mongodb://${process.env.DB_host}:${process.env.DB_port}/${dbName}`;

console.log(process.env.NODE_ENV);
console.log(dbName);

async function connectDB() {
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DataBase conected on port", process.env.DB_port);
}

connectDB();
