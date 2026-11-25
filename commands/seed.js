// Commands List

// Load chalk for colored terminal text
const chalk = require("chalk");

// Load connect/disconnect helper
const { connectDB, disconnectDB } = require("../config/db");

// Load dictator 
const Dictator = require("../models/Dictator");
// Load blueprint
const seedData = require("../data/seedData.json");

// Seed function (admin seed)
async function seed () 
{ 
	// Try below code. If fails, go catch
	try 
	{
		// Connect to MongoDB. Wait for connection before next line
		await connectDB();
		// CLG = Connected
		console.log(chalk.blue('Connected to MongoDB'));
		// keep a list of items saved = Dictator.saveMany items(list of items)
		const addedItems = await Dictator.insertMany(seedData);
		// CLG = Success
		console.log(chalk.green(`Seeded ${addedItems.length} auction items into database.`));
	}
	// If try fails, run
	catch (error)
	{
		// CLG = Error
		console.log(chalk.red("Seeding failed: " +error.message));
	}
	// Run at the end
	finally
	{
		// Disconnect from MongoDB
		await disconnectDB();
		// CLG = Disconnected
		console.log(chalk.grey(`Disconnected from MongoDB`));
	}
}

module.exports = seed;