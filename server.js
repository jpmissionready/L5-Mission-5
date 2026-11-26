// Load Express
const express = require("express");

// Load chalk for colored terminal text
const chalk = require("chalk");

// Load connecteDB 
const { connectDB } = require ("./config/db");

// app is express server
const app = express();
const PORT = 3000;

// Load Dictator to find items 
// Model (Dictator or Manager) is what uses Schema (Blueprint) to save / delete / find items in the auctionitems collection.
const Dictator = require("./models/Dictator");


// ========= ========= ========= ========= SEARCH ROUTE ========= ========= ========= =========

app.get("/api/search", async (req, res) =>
{
    // Everything after ? on URL is keyword.
    const keyword = req.query.keyword;
    // Use dictator.find to find every item that matches the filters inside  { }
    const items = await Dictator.find (
        {
            // Match if title matches OR if description matches
            $or:
            [
                // $regex = has text (whatever is classed as keyword, or after ?)
                // $options "i" to ignore uppercase and lowercase
                { title: { $regex: keyword, $options: "i" }},
                { description: { $regex: keyword, $options: "i" }}
            ]
        }
    )
    res.json(items);
});


// ========= ========= ========= ========= SERVER START ========= ========= ========= =========
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

// Run serverStart function to start the server.
serverStart();