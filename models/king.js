const mongoose = require("mongoose")
const kingSchema = mongoose.Schema({
name: String,
kingdom: String,
years_ruled: Number
})
module.exports = mongoose.model("King",
kingSchema)