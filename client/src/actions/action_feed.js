export const GET_FEED = 'GET_FEED';
import axios from 'axios';

export function getFeed(lat, long) {
  // RETURN AXIOS AJAX REQUEST //
  const url = '/feed';
  const request = axios.put(url, {
    id: 1,
    latitude: lat,
    longitude: long
  });

  return {
    type: GET_FEED,
    payload: request
  }
}
