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

const getSensors = () => {

    const sensorsList = new Set(database.map((record:any) => record.sensor));

    const sensorNames = Array.from(sensorsList);

    const sensors = sensorNames.map((sensor, index) => { return {id: index+1, sensor }});

    return sensors;

}

const getOccupancy =(sensor:any, atInstant:any=null)=> {
    
    let sensorRecords = database.filter((record:any) => record.sensor==sensor);
        
    if (atInstant!=null) sensorRecords = sensorRecords.filter((record:any)=> record.ts==atInstant);

    const peoplesIn = sensorRecords.reduce((a:number,b:any)=> a+b['in'], 0);

    const peoplesOut = sensorRecords.reduce((a:number,b:any)=> a+b['out'], 0);

    return peoplesIn - peoplesOut;

}


export default { storeSensorRecord, getSensors, getOccupancy };