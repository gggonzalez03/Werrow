const mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
  comment: {type: String, required: true},
  time_stamp: {type: String, required: true},
  borrow_post_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'BorrowPost'},
  user_id: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User'}
});


module.exports = mongoose.model('Comment', commentSchema);
