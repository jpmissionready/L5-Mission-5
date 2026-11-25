// Connection to and from local MongoDB

// Load mongoose so we can talk to MongoDB
const mongoose = require("mongoose");

// Load chalk for colored terminal text
const chalk = require("chalk");

const MONGO_URL = "mongodb://127.0.0.1:27017/trademe";

// connectDB opens connection to MongoDB
// async = wait until its done before moving on
// console.log("message") turns to console.log(chalk.color("message")); with Chalk
async function connectDB() 
{
	await mongoose.connect(MONGO_URL);
	console.log(chalk.blue("Connected to MongoDB (trademe database)"));
}

// disconnectDB closes connection to MongoDB
async function disconnectDB()
{
	await mongoose.disconnect(MONGO_URL);
	console.log(chalk.grey("Disconnected from MongoDB (trademe database) "));
}

module.exports = { connectDB, disconnectDB };