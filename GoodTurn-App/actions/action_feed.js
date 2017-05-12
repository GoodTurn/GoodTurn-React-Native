import axios from 'axios';
export const GET_FEED = 'GET_FEED';
export const ACT_FEED = 'ACT_FEED';
export const SEARCH_FILTER = 'SEARCH_FILTER';


export function activate() {
  return {
    type: ACT_FEED,
  };
}

export function search(term) {
  return {
    type: SEARCH_FILTER,
    payload: term,
  };
}

export function getFeed(lat, long, id) {
  // RETURN AXIOS AJAX REQUEST //
  return (dispatch) => {
    const url = `http://localhost:8080/feed/${id}`;
    axios.put(url, {
      latitude: lat,
      longitude: long,
    })
      .then(feed => dispatch({
        type: GET_FEED,
        payload: feed,
      }))
      .catch((err) => {
        console.log(err); // eslint-disable-line
      });
  };
}
