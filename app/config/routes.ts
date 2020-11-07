// lib/config/routes.ts
import { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";

export class Routes {
  public userController: UserController = new UserController();

  public routes(app): void {
    app.route("/").get(this.userController.findAll);

    app.route("/users").get(this.userController.findAll);
  }
}