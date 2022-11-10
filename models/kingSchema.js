const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
name: String,
kingdom: String,
years_ruled: Number
})
module.exports = mongoose.model("King",
kingSchema)