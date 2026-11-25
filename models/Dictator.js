// Model (Dictator or Manager) is what uses Schema (Blueprint) to save / delete / find items in the auctionitems collection.

// Load Mongoose
const mongoose = require("mongoose");

// Schema = blueprint / form template (what goes into what)
// Schema = list every field an item has and the type of data in said field
const auctionItemSchema = new mongoose.Schema({
	title: String,
	description: String, 
	start_price: Number,
	reserve_price: Number,
});

// mongoose.model create Dictator | Dictator given Schema (blueprint)
const Dictator = mongoose.model("AuctionItem", auctionItemSchema);

// Export so it can be used by other files.
module.exports = Dictator;