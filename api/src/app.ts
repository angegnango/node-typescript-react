import express, { Application, Request, Response} from 'express';
import cors from 'cors';

export default function expressApp(){

    const app:Application = express();
    app.use(cors());
    app.use(express.json());

    app.get('/', (req: Request, res: Response) => res.send(200));

    return app;

}