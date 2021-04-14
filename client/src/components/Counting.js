import React, {useState, useEffect } from 'react';
import { getSensors, getOccupancy } from '../services/features';
import '../App.css'

function Counting(props) {

    const [sensors, setSensors] = useState([]);
    const [sensor, setSensor] = useState('');
    const [occupancy, setOccupancy] = useState('');

    useEffect(()=>{
        (
            async()=> {
                const response = await getSensors();
                setSensors(response);
            }
        )();
    }, [])
    
    const submitButton = (e) => {
        e.preventDefault();
        // Show occupancy
        const data = getOccupancy(sensor);
        console.log(data)
        data.then(result=>{
            setOccupancy(result["inside"]);
        })
    }

    return (
      <div className="App">
          <div className="container">
                <div className="row">
                   <div className="col-sm-4"></div>
                   <div className="col-sm-4 box">
                        <h5>Meeting Room occupancy</h5>
                        <div className="row form">
                            <div className="col-sm-5">
                                <div className="form-group"><label for="sensor">Select a Sensor</label></div>
                            </div>
                            
                             <div className="col-sm-7">
                                <form onSubmit={submitButton.bind(this)}>
                                    <div className="form-group">
                                        <select className="form-control" value={sensor} onClick={(e) => setSensor(e.target.value)}>
                                            {sensors.length>0?sensors.map((res) => {
                                                return <option key={res.id} value={res.sensor} className="form-control">{res.sensor}</option>;
                                             }): <option value="">No Sensors available</option>}
                                        </select>
                                    </div>
 
                                    <button type="submit" className="btn btn-primary">Show occupancy</button>
                                </form>
                             </div>
                        </div>
                        <div className="row">

                            {
                                occupancy==''?'': <div className="col-sm-12 result">
                               Sensor <b>{sensor} </b>report room occupancy by <b>{occupancy} </b>peoples
                                
                            </div>
                            }
                            
                        </div>
                   </div>
                   <div className="col-sm-4"></div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Counting;
