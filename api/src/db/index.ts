import { uuid } from 'uuidv4';

const database:any = [
    {id: uuid(), ts: new Date().toISOString(), sensor: 'sensor-room-1', in: 10, out: 2},
    {id: uuid(), ts: new Date().toISOString(), sensor: 'sensor-room-1', in: 1, out: 0},
    {id: uuid(), ts: new Date().toISOString(), sensor: 'sensor-room-2', in: 0, out: 3}
];

export default database;