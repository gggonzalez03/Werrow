const BorrowPost = require('../models/borrow-post');
const routes = require('express').Router();

routes.post('/create', (req, res) => {
  req.body._id = undefined;
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
  BorrowPost.find({})
  .populate('user_id', ['name', 'email', 'photo', 'address'])
  .sort('-time_stamp')
  .exec((err, borrow) => {
    if (!err) {
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

routes.get('/borrows/user', (req, res) => {
  console.log(req.session.user._id);
  BorrowPost.find({user_id: req.session.user._id})
  .populate('user_id', ['name', 'email', 'photo', 'address'])
  .sort('-time_stamp')
  .exec((err, borrow) => {
    if (!err) {
      res.status(200).json({
        status: "200",
        message: "OK",
        data: borrow
      })
    }
    else {
      res.status(500).json({
        status: "500",
        message: "Internal Server Error." 
     })
    }
  })
})

routes.get('/owner/:id', (req, res) => {
  BorrowPost.find({id: req.params.id}, 'user_id')
  .exec((err, user_id) => {
    console.log(user_id);
  })
})

module.exports = routes;
