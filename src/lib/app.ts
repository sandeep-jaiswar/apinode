import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import responseInterceptorMiddleware from '../middlerwares/responseInterceptorMiddleware';

class App {
  private app: Express;
  private port: number;

  constructor() {
    dotenv.config(); // Load environment variables from .env file
    this.port = parseInt(process.env.PORT || '8080', 10);
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
    this.errorHandling();
  }

  private setupMiddleware(): void {
    // Add any middleware you need here
    this.app.use(express.static('public'))
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(responseInterceptorMiddleware);
  }

  private setupRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.json({ message: 'Hello World!' });
    });
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }

  public getApp(): Express {
    return this.app;
  }

  public getPort(): number {
    return this.port;
  }

  public errorHandling(): void {
    this.app.use((req: Request, res: Response) => {
      res.status(500).json({
        message: 'Some Error Occurred',
      });
    });
  }
}

export default App;
