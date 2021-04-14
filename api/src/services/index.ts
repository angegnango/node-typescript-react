import validator from '../helpers/validator';
import {uuid} from 'uuidv4';
import database from '../db/index';


const storeSensorRecord = (payload:any=null) => {
    
    const isValid = validator(payload)

    if(typeof(isValid)=='string') return isValid
    
    payload['id']= uuid();
    database.push(payload);

    return payload;

}


export default { storeSensorRecord };