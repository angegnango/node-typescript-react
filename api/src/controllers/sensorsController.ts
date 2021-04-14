import {Request, Response} from 'express';
import services from '../services/index';
const { getSensors } = services;

export default function(req: Request, res: Response) {
    
    const sensors  = getSensors();

    return res.status(200).send(sensors);

}
