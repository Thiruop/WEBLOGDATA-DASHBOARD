const mongoose = require("mongoose");
const {data,user} = require('../models/schema');

mongoose.connect("mongodb://127.0.0.1:27017/weblogdb").then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Connection failed:", err);
});

module.exports = mongoose;