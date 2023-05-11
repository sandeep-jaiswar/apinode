import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

class App {
  private app: Express;
  private port: number;

  constructor() {
    dotenv.config(); // Load environment variables from .env file
    this.port = parseInt(process.env.PORT || '8080', 10);
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware(): void {
    // Add any middleware you need here
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
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
}

export default App;
