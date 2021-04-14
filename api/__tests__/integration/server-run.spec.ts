import request from 'supertest';
import expressApp from '../../src/app';
const app = expressApp();

describe("Server must run witout error", ()=> {

    it("should return code status 200", (done)=>{
        request(app).get('/').expect(200, done);
    });

});