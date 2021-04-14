import services from '../../src/services/index';
import database from '../../src/db/index';


describe("Get all sensors", ()=> {

    test("it should return empty list of sensors", () => {
        
        const {getSensors} = services;
        const sensors = getSensors();
        expect(sensors.length).toBe(0);

    });

    test("it should return list of sensors", () => {
        
        database.push({sensor: 'room-3',ts: new Date().toISOString(), in: 5, out: 0});
        const {getSensors} = services;
        const sensors = getSensors();
        expect(sensors.length).toBe(1);

    });
})