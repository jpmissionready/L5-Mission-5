# L5-Mission-5

Level 5, Mission 5 (Trade Me). Phase 1

- CLI tool (admin) to seed auction items into, and delete them from, a local MongoDB database
- Search API (Express) that finds auction items by keyword in the title or description

Each auction item has 4 fields: title, description, start_price, reserve_price.

---

## Requirements

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community/) installed and running locally
- [MongoDB Compass](https://www.mongodb.com/try/download/compass) to see the data added by admin seed or removed by admin delete
- [Postman](https://www.postman.com/downloads/) to test the API (optional, you can type the URL in your browser instead)

---

## Setup

1. Clone the repository:
   git clone https://github.com/jpmissionready/L5-Mission-5.git
2. Go into the project folder:
   cd L5-Mission-5
3. Install the packages:
   open VSC terminal and type 
   `npm install`
4. Link the CLI so the admin commands work in any terminal: 
   open VSC terminal and type 
   `npm link`
   
---

## CLI Tool Usage:
Open VSC terminal and type:

admin --help | This will list all of the commands
admin seed | This will add auction items from the data/seedData.json to MongoDB
admin delete | Delete all auction items from MongoDB

Chalk Colors (Terminal Colors)
Blue = Connected | Grey = Disconnected
Green = Success | Red = Failure


To see the data, open MongoDB Compass and connect to mongodb://localhost:27017 then open trademe > auctionitems.

---

## Search API

1. Seed the data first (admin seed).
2. Open VSC terminal and type node server.js to start the server
3. Wait for SUCCESS: Server running on http://localhost:3000
4. Type a search URL in your browser or Postman (GET).
5. Press Ctrl + C to stop the server.

Search URL: http://localhost:3000/api/search?keyword=YOUR_KEYWORD
(you can use the same above on POSTMAN)

Searches the title and description. Case-nonsensitive

 Search | Result

http://localhost:3000/api/search?keyword=asus | 200, returns two ASUS items from the seedData

http://localhost:3000/api/search?keyword=EVGA | 200, returns two EVGA items from the seedData

http://localhost:3000/api/search?keyword=Spaceship | 404, no item found check will be triggered

http://localhost:3000/api/search | 400, no keywoard check will be triggered
