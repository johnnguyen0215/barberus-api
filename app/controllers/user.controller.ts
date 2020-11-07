const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

export class UserController {
  // Create and Save a new Tutorial
  create = async (req, res) => {
    if (!req.body.name) {
      res.status(400).send({
        message: 'Name can not be empty.'
      })

      return;
    }

    const user = {
      name: req.body.user,
      email: req.body.email,
      password: req.body.password
    }

    try {
      const userData = User.create(user);

      res.send(userData);
    } catch (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the user.'
      })
    }
  };

  // Retrieve all Tutorials from the database.
  findAll = (req, res) => {

  };

  // Find a single Tutorial with an id
  findOne = (req, res) => {

  };

  // Update a Tutorial by the id in the request
  update = (req, res) => {

  };

  // Delete a Tutorial with the specified id in the request
  delete = (req, res) => {

  };

  // Delete all Tutorials from the database.
  deleteAll = (req, res) => {

  };

  // Find all published Tutorials
  findAllPublished = (req, res) => {

  };
}

