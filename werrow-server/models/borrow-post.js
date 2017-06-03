const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/werrow', function(err, res){
  if (err) {
    console.log("Could not connect to the database");
  }
  else {
    console.log("Successfully connected to the database");
  }
});

var borrowPostSchema = new mongoose.Schema({
  item_name: {type: String, require: true},
  reason: {type: String, require: true},
  time_stamp: {type: String, require: true},
  satisfied: {type: Boolean, require: true},
  user_id: {type: mongoose.Schema.Types.ObjectId, require: true}
});


module.exports = mongoose.model('BorrowPost', borrowPostSchema);
