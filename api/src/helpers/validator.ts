export default function validator(param:any){

    // Check if is not null
    if(param==null) return 'You must provide a payload as parameter';

    // Check if is object
    if(!isObject(param)) return 'You must provide a payload object';

    // Check if has valid key
    if(typeof(haveValidKey(param)!=true)) return haveValidKey(param)

    return true;
}


const isObject = (param:any) => typeof(param) =='object'

const haveValidKey = (param:any) => {

    const sensorKey = param.hasOwnProperty('sensor')
    const timeKey = param.hasOwnProperty('ts')
    const inKey = param.hasOwnProperty('in')
    const outKey = param.hasOwnProperty('out')

    if(!sensorKey) return 'payload object must contain sensor as key';

    if(!timeKey) return 'payload object must contain ts as key';

    if(!inKey) return 'payload object must contain in as key';

    if(!outKey) return 'payload object must contain out as key';

    if(typeof(param['in'])!='number') return 'value of in payload key must be numeric'

    if(typeof(param['out'])!='number') return 'value of out payload key must be numeric'

    return true;
}