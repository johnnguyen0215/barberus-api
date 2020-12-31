import { User } from '../models/user.model';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import joi from 'joi';



export class UserController {
  private readonly userValidator = joi.object(({
    name: joi.string().required(),
    email: joi.string().email({ tlds: {allow: false} }).required(),
    password: joi.string().min(8).required()
  }));

  public index(req: Request, res: Response) {
    res.json({
      message: 'Hello boi'
    })
  }

  // Create and Save a new Tutorial
  public create = async (req: Request, res: Response): Promise<void> => {
    let encryptedPw = null;

    const result = this.userValidator.validate(req.body);

    if (result.error) {
      const errorDetails = result.error.details[0];

      res.status(400).send(errorDetails);

      return;
    }

    encryptedPw = await bcrypt.hash(req.body.password, 10);

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: encryptedPw
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

