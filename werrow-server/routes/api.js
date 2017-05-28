const routes = require('express').Router();

routes.use('/user', require('./user-routes'));

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
