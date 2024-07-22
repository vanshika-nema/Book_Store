const mongoose = require("mongoose");
const bookmodel = new mongoose.Schema({
    name: String,
    author: String,
    pages: Number,
    prize: Number,
    year: String,
    description: String,
    publicaton: String,
});
module.exports = mongoose.model("books",bookmodel);