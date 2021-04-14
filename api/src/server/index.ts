import http from 'http';
import expressApp from '../app';
import {Application} from 'express';


const app = expressApp();


const runServer = (app:Application)=> {

    const server = http.createServer(app);

    server.listen(3001, () => console.log(`Server are running on port 3001`))

}

runServer(app);