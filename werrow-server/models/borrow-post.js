const mongoose = require("mongoose");

var borrowPostSchema = new mongoose.Schema({
  item_name: {type: String, require: true},
  reason: {type: String, require: true},
  time_stamp: {type: String, require: true},
  satisfied: {type: Boolean, require: true},
  user_id: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User'}
});


module.exports = mongoose.model('BorrowPost', borrowPostSchema);
