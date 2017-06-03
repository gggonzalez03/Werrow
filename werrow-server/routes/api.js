const routes = require('express').Router();

routes.use('/user', require('./user-routes'));
routes.use('/borrow', require('./borrow-post-routes'));

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
