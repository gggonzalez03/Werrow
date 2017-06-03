const BorrowPost = require('../models/borrow-post');
const routes = require('express').Router();

routes.post('/create', (req, res) => {
  req.body._id = undefined;
  //delete req.body.time_ago;
  //delete req.body.map_hidden;
  req.body.user_id = req.session.user._id;
  console.log(req.session.user._id);

  BorrowPost.create(req.body, (err, user) => {
    if (!err) {
      res.status(201).json({
        status: "201",
        message: "Resource Created."
      });
    }
    else {
      res.status(500).json({
        status: "500",
        message: "Internal Server Error."
      });
    }
  });
});

routes.get('/borrows', (req, res) => {
  BorrowPost.find({}).sort('-time_stamp')
  .exec((err, borrow) => {
    if (!err) {
      console.log("borrow");
      res.status(200).json({
        status: "201",
        message: "OK",
        data: borrow
      });
    }
    else {
      res.status(500).json({
        status: "500",
        message: "Internal Server Error."
      });
    }
  })
})

module.exports = routes;
