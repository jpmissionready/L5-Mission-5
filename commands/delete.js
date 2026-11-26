// Delete Command (admin delete)

// Load chalk for colored terminal text
const chalk = require("chalk");

// Load connect/disconnect helper
const { connectDB, disconnectDB } = require("../config/db");

// Load Dictator 
const Dictator = require("../models/Dictator");

// Delete function (admin delete)
async function deleteSeed () 
{ 
	// Try below code. If fails, go catch
	try 
	{
		// Connect to MongoDB. Wait for connection before next line
		await connectDB();
		// CLG = Connected
		console.log(chalk.blue('Connected to MongoDB'));
		// Keep a list of the many items saved.
		const deleteCount = await Dictator.deleteMany({});
		// CLG = Success
		console.log(chalk.green(`Deleted ${result.deleteCount} auction items from database.`));
	}
	// If try fails, run
	catch (error)
	{
		// CLG = Error
		console.log(chalk.red("Delete failed: " +error.message));
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

module.exports = deleteSeed;