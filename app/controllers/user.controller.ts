import { User } from '../models/user.model';
import { Request, Response } from 'express';

export class UserController {
  public index(req: Request, res: Response) {
    res.json({
      message: 'Hello boi'
    })
  }

  // Create and Save a new Tutorial
  public create = async (req: Request, res: Response) => {
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
  public findAll = (req: Request, res: Response) => {

  };

  // Find a single Tutorial with an id
  public findOne = (req: Request, res: Response) => {

  };

  // Update a Tutorial by the id in the request
  public update = (req: Request, res: Response) => {

  };

  // Delete a Tutorial with the specified id in the request
  public delete = (req: Request, res: Response) => {

  };

  // Delete all Tutorials from the database.
  public deleteAll = (req: Request, res: Response) => {

  };

  // Find all published Tutorials
  public findAllPublished = (req: Request, res: Response) => {

  };
}

