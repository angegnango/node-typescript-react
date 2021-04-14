import express, { Application, Request, Response} from 'express';
import cors from 'cors';
import routes from './routes/index';

export default function expressApp(){

    const app:Application = express();
    app.use(cors());
    app.use(express.json());

    app.use(routes);

    app.get('/', (req: Request, res: Response) => res.send('Express app'));

    return app;

}