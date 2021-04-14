import {Request, Response} from 'express';
import services from '../services/index';
const {getOccupancy} = services;

export default function(req: Request, res: Response) {
    
    let {sensor, atInstant} = req.query;
    let time:any;

    if (sensor==undefined) return res.status(400).send({ error: "sensor information are missing on query parameter"});

    atInstant==undefined ? time = null : time = String(atInstant)

    const result = getOccupancy(String(sensor), time)

    return res.status(200).send({ inside: result});

}
