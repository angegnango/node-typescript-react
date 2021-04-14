import {Request, Response} from 'express';
import services from '../services/index';

export default function(req: Request, res: Response) {
    
    const record = req.body;
    const { storeSensorRecord } = services;
    const data = storeSensorRecord(record);

    if (typeof(data)=='string') return res.status(400).send(({error: data}))

    return res.status(200).send(data);

}
