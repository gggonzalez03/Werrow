const routes = require('express').Router();

routes.get('/:id', (req, res) => {
  res.status(200).json({
    _id: req.params.id,
    name: "Ging Gonzalez",
    email: "ginggonzalez3@gmail.com",
    address: {
        street: "",
        city: "",
        state: "",
        zip_code: ""
    }
  });
});

module.exports = routes;
