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

routes.post('/create', (req, res) => {
  // TODO: Hash the password with salt
  req.body.password = "abcde";

  // TODO: Delete the _id property and save to the database

  res.status(200).json({
    status: "200",
    body: req.body
  });
})

module.exports = routes;
