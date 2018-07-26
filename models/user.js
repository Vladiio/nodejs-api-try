const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// create model class
const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
