import * as express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { Routes } from './config/routes';

class App {
  public app: express.Application;
  public routPrv: Routes = new Routes();

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

const app = express();

// simple route
app.get("/", (req: any, res: any) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const bruh = require('./models');
bruh.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and res-sync db');
});