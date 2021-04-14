import {Request, Response} from 'express';
import services from '../services/index';

export default function(req: Request, res: Response) {
    
    const { getSensors } = services;

    const sensors  = getSensors();

    return res.status(200).send(sensors);

}
