// Load Express
const express = require("express");

// Load chalk for colored terminal text
const chalk = require("chalk");

// Load connecteDB 
const { connectDB } = require ("./config/db");

// app is express server
const app = express();
const PORT = 3000;

// Starting the server
// again we use async as we need to wait till next step
async function serverStart()
{
    try
    {
        // wait for connectDB to finish and connect
        await connectDB();
        // run server on PORT 3000 
        app.listen(PORT, () =>
        {
            // when its connected, send
            console.log(chalk.green("SUCCESS: Server running on http://localhost:3000"));
        });
    }
    catch (error)
    {
        // if it fails, send
        console.log(chalk.red("FAILURE: Unable to start the server"))
    }
}

// run above function
serverStart();