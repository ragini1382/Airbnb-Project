const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/a-vase-filled-with-white-flowers-on-top-of-a-table-o3R-ASDoHCo",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/a-vase-filled-with-white-flowers-on-top-of-a-table-o3R-ASDoHCo"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
