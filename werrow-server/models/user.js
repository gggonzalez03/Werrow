const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {type: String, require: true},
  email: {type: String, require: true},
  password: {type: String, require: true},
  address: {
    street: String,
    city: String,
    state: String,
    zip_code: Number
  },
  photo: String
});


module.exports = mongoose.model('User', userSchema);
