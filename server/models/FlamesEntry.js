
const mongoose = require('mongoose');

const FlamesEntrySchema = new mongoose.Schema({
  name1: String,
  name2: String,
  result: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FlamesEntry', FlamesEntrySchema);