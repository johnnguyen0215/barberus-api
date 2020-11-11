// lib/config/routes.ts
import express from 'express';
import { UserController } from '../controllers/user.controller';

export class Routes {
  public userController: UserController = new UserController();

  public routes(app: express.Application): void {
    app.route('/').get(this.userController.findAll);

    app.route('/users').get(this.userController.index);

    app.route('/users').post(this.userController.create);
  }
}