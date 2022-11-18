const mongoose = require("mongoose")
const kingSchema = mongoose.Schema({
king_name: String,
kingdom: String,
years_ruled: Number
})
module.exports = mongoose.model("King",
kingSchema)