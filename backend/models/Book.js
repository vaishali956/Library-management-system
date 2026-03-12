const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  serialNo: { type: String, unique: true },
  isAvailable: { type: Boolean, default: true }
});

module.exports = mongoose.model('Book', BookSchema);