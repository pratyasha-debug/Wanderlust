const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  image: {
    url: String,
    filename: String,
  },

  price: {
    type: Number,
  },

  location: {
    type: String,
  },

  country: {
    type: String,
  },

  reviews: [ // An array of ObjectIds.
    {
      type: Schema.Types.ObjectId, //Each ObjectId refers to a document in the Review collection.
      ref: "Review", //  it tells Mongoose which model to look in when we later use .populate("reviews").
    },
  ],

  owner: {
    type: Schema.Types.ObjectId, //Every listing has one owner (the user who created it).
    ref: "User", //It's a reference to the User model by ObjectId.
  },
  geometry : {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
  },
  category: {
    type: String,
    enum: [
      "trending",
      "rooms",
      "iconic-cities",
      "mountain",
      "castles",
      "amazing-pools",
      "camping",
      "farms",
      "arctic",
      "domes",
      "boats",
    ],
    required: true,
  },
});

// mongoose Middleware to delete the reviews of a listing after deleting that listing
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
