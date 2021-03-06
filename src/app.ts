import * as express from "express";
import * as bodyParser from "body-parser";
import { mainRoutes } from './routes/MainRoutes';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

mainRoutes.use('/swagger', swaggerUi.serve);
mainRoutes.get('/swagger', swaggerUi.setup(swaggerDocument));

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // support application/json
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // Routing
    this.app.use("/", mainRoutes);
  }
}

export default new App().app;