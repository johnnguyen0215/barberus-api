import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { Routes } from './config/routes';

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    const corsOptions = {
      origin: "http://localhost:8081"
    };

    this.app.use(cors(corsOptions));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
}

export default new App().app;
