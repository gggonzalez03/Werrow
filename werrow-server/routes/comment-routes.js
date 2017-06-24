const mongoose = require('mongoose');
const BorrowPost = require('../models/borrow-post');
const Comment = require('../models/comment');
const routes = require('express').Router();

routes.post('/create', (req, res) => {
  req.body._id = undefined;
  req.body.user_id = req.session.user._id;
  Comment.create(req.body, (err, comment) => {
    if (!err) {
      Comment.find({_id: comment._id})
      .populate('user_id', ['name', 'photo'])
      .exec((err, commentWithUser) => {
        if (!err) {
          res.status(200).json({
            status: "200",
            comment: commentWithUser[0]
          })
        }
        else {
          res.status(500).json({
            status: "500",
            message: "Something went wrong"
          });
        }
      })
    }
    else {
      res.status(500).json({
        status: "500",
        message: "Something went wrong"
      });
    }
  })
})

routes.post('/comments', (req, res) => {
  Comment.find({
    borrow_post_id: req.body.postId
  })
  .populate('user_id', ['name', 'photo'])
  .sort('-time_stamp')
  .exec((err, comments) => {
    if (!err) {
      res.status(200).json({
        data: comments
      })
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
