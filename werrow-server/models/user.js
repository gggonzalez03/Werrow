const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/werrow', function(err, res){
  if (err) {
    console.log("Could not connect to the database");
  }
  else {
    console.log("Successfully connected to the database");
  }
});

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
