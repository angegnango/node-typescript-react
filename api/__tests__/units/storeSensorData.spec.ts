import services from '../../src/services/index';


describe("store sensor data from IoT Network", ()=> {
   
    test("when we try without payload", ()=> {
        const {storeSensorRecord } = services;
        const response = storeSensorRecord();
        expect(response).toBe('You must provide a payload as parameter');

    });

    test("when we try with string as payload", ()=> {
        const {storeSensorRecord } = services;
        const response = storeSensorRecord('payload');
        expect(response).toBe('You must provide a payload object');

    });

    test("when we try without sensor key", () => {
        const {storeSensorRecord } = services;
        const item = {ts: new Date().toISOString(), in: 13, out:6}
        const response = storeSensorRecord(item);
        expect(response).toBe('payload object must contain sensor as key')

    });

    test("when we try without sensor key", () => {
        const {storeSensorRecord } = services;
        const item = {ts: new Date().toISOString(), in: 13, out:6}
        const response = storeSensorRecord(item);
        expect(response).toBe('payload object must contain sensor as key')

    });

    test("when we try without ts key", () => {
        const {storeSensorRecord } = services;
        const item = {sensor: 'room-1', in: 13, out:6}
        const response = storeSensorRecord(item);
        expect(response).toBe('payload object must contain ts as key')

    });

    test("when we try without in key", () => {
        const {storeSensorRecord } = services;
        const item = {sensor: 'room-2',ts: new Date().toISOString(), out:6}
        const response = storeSensorRecord(item);
        expect(response).toBe('payload object must contain in as key')

    });

    test("when we try without ou key", () => {
        const {storeSensorRecord } = services;
        const item = {sensor: 'room-2',ts: new Date().toISOString(), in: 13}
        const response = storeSensorRecord(item);
        expect(response).toBe('payload object must contain out as key')

    });

    test("when we try with in as a string", () => {
        
        const {storeSensorRecord } = services;
        const item = {sensor: 'room-10',ts: new Date().toISOString(), in: 'df', out: 3}
        const response = storeSensorRecord(item);
        expect(response).toBe('value of in payload key must be numeric')

    });

    test("when we try with out as a string", () => {
        
        const {storeSensorRecord } = services;
        const item = {sensor: 'room-8',ts: new Date().toISOString(), in: 5, out: '3'}
        const response = storeSensorRecord(item);
        expect(response).toBe('value of out payload key must be numeric')

    });

    test("when we try with valid payload", () => {
        
        const {storeSensorRecord } = services;
        const item = {sensor: 'room-3',ts: new Date().toISOString(), in: 5, out: 0}
        const response = storeSensorRecord(item);
        expect(response.hasOwnProperty('id')).toBeTruthy

    });
});