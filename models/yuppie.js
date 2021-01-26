const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yuppieSchema = new Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  location: {type: String, required: true},
  occupation: {type: String, required: true}
}, { timestamps: true });

module.exports = mongoose.model('Yuppie', yuppieSchema);