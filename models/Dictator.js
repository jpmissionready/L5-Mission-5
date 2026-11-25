// Model = Dictator
// Model is basically a blueprint to tell Mongoose what the formatting is for an item in the DB.

// Load Mongoose
const mongoose = require("mongoose");

// Schema = form template (what goes into what)
// Schema = list every field an item has and the type of data in said field
const auctionItemSchema = new mongoose.Schema({
	title: String,
	description: String, 
	start_price: Number,
	reserve_price: Number,
});

// Turn schema (form template) to database information
const Dictator = mongoose.model("AuctionItem", auctionItemSchema);

// Export so it can be used by other files.
module.exports = Dictator;