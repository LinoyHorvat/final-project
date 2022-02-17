const mongoose = require("mongoose");
const validator = require("validator");

const RoomSchema = new mongoose.Schema({
  address: {
    type: "string",
    require: true,
  },
  price: {
    type: Number,
    validate (value){
      if (value < 0 ) throw new Error ("must be a positive integer")
    }
  },
  // TODO: add pictures
  pictures: {
    type: String,
    default:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
  },
  phone: {
    type: String,
    // TODO: add validator
  },
  Description: {
    type: String,
  },
});
module.exports = mongoose.model("Room", RoomSchema);