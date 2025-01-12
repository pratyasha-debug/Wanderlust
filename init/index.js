const mongoose = require("mongoose");
const initData = require("./data.js"); // Make sure the path is correct
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");
    console.log(initData); // Logs the imported data

    // Initialize the database after the connection is established
    await initDB();
  } catch (err) {
    console.log("Error connecting to DB:", err);
  }
}

const initDB = async () => {
  try {
    // Check if initData.data is correctly imported
    if (!initData || !Array.isArray(initData.data)) {
      throw new Error("Data is not properly imported from data.js");
    }

    // Delete existing data in the Listing collection
    await Listing.deleteMany({});

    // Modify the data by adding an owner ID
    const modifiedData = initData.data.map((obj) => ({
      ...obj,
      owner: "677de3c54c10060c52a0a5e9", // Replace with the actual owner ID
    }));

    // Insert the modified data into the database
    await Listing.insertMany(modifiedData);
    console.log("Data was initialized");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

// Start the main function to connect to the DB and initialize the data
main();
