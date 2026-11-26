#!/usr/bin/env node
// ^ DO NOT DELETE THAT. SheBang. It tells the device to run this with Node when we type admin instead of node index.js


// Load CLI Tool program
const { program } = require("commander");

// Load the seed function
const seed = require("./commands/seed");
const deleteSeed = require("./commands/delete");

// admin --help will list all of the commands below incl. their descriptions.
program 
.name("admin")
.description("CLI Tool to interact with MongoDB")
.version("1.0.0");

// admin seed
program
.command("seed")
.description("Add the auction items from seedData.json to MongoDB")
.action(seed);

// admin delete
program
.command("delete")
.description("Delete all auction items from MongoDB")
.action(deleteSeed);

// Run the command that was typed in the terminal
program.parse();
