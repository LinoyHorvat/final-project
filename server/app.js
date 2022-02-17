const express = require('express');
const app = express();
const cors = require("cors");
const path = require("path");
const axios = require("axios");
//
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
require("./db/mongoose");
const publicPath = path.join(__dirname, "../client/build");
app.use(express.static(publicPath));


// app.get("/*", (req, res) => {
//   res.sendFile(path.resolve(publicPath, "index.html"));
// });

// routes

const userRoute = require("./routes/user");
const authenticationsRoutes = require("./routes/authentications");

app.use("/api/users",userRoute)
app.use("/api/users",authenticationsRoutes)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});