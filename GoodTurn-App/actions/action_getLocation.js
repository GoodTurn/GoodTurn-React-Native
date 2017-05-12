import axios from 'axios';
import API_KEY from '../config';


export const GET_LOCATION = 'GET_LOCATION';

export function getLocation(lat, long) {
  const url2 = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${API_KEY}`;
  const request = axios.get(url2);

  return {
    type: GET_LOCATION,
    payload: request,
  };
}
