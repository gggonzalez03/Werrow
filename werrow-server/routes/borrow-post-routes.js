const BorrowPost = require('../models/borrow-post');
const routes = require('express').Router();

routes.post('/create', (req, res) => {
  delete req.body._id;
  //delete req.body.time_ago;
  //delete req.body.map_hidden;
  req.body.user_id = req.session.user._id;
  console.log(req.session.user._id);

  BorrowPost.create(req.body, (err, res) => {
    if (!err) {
      console.log("success");
    }
    else {
      console.log(err);
    }
  });

  res.status(200).json({
    status: "200"
  });
});

module.exports = routes;
