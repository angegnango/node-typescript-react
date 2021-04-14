import axios from 'axios';
const API_ENDPOINT = 'http://localhost:3001/api/';

export const getSensors = async () => {
    try{
      const url = `${API_ENDPOINT}/sensors`;
      const response = await axios.get(url);
      return response.data;
    }catch(err){
      return []
    }
}

export const getOccupancy = async (sensor) => {
    try{
      const url = `${API_ENDPOINT}/occupancy?sensor=${sensor}`;
      const response = await axios.get(url);
      return response.data;
    }catch(err){
      return {}
    }
}