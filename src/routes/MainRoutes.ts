import * as express from "express";
import { mainController } from "../controllers/MainController";
import { Get, Route } from "tsoa";

@Route('/')
class MainRoutes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }
  @Get()
  private config(): void {
    this.router.get("/", (req: express.Request, res: express.Response) =>
      mainController.root(req, res)
    );
  }
}

export const mainRoutes = new MainRoutes().router;