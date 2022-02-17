const mongoose = require('mongoose');
const path = require ("path")
require("dotenv").config({path: "../../"});

const mongo_uri = process.env.MONGO_URL;

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connected to db");
})

// const mongo_uri = "mongodb+srv://group7:group7@cluster0.4sypx.mongodb.net/myRoommates?authSource=admin&replicaSet=atlas-10b2v9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
// mongoose.connect(mongo_uri, () => {
//   console.log("connected to db");
// })

// TODO: Remove mongo_uri find the bug with dotenv file. 