import services from '../../src/services/index';
import { uuid } from 'uuidv4';
import database from '../../src/db/index';


describe("Get occupancy by sensor room", ()=> {

    test("sensor room-1 must return 6", () => {

        const records:any = [
            {id: uuid(), ts: new Date().toISOString(), sensor: 'room-1', in: 10, out: 2},
            {id: uuid(), ts: new Date().toISOString(), sensor: 'room-1', in: 1, out: 0},
            {id: uuid(), ts: new Date().toISOString(), sensor: 'room-1', in: 0, out: 3}
        ]

        database.push(...records)

        const { getOccupancy } = services
        const result = getOccupancy('room-1', null);
        expect(result).toBe(6);
    });

    test("sensor room-2 must return 8", () => {
        
        const record = {id: uuid(), ts: new Date().toISOString(), sensor: 'room-2', in: 10, out: 2}
        database.push(record);
        const { getOccupancy } = services
        const result = getOccupancy('room-2', null);
        expect(result).toBe(8);

    });

});