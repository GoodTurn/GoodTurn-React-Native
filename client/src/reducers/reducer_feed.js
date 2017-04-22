import { GET_FEED } from '../actions/action_feed.js';
import { SEARCH_FILTER } from '../actions/action_search.js';

export default function(state = [], action) {
  switch (action.type) {
    case GET_FEED:
      let feed = action.payload.data.feed
      if (feed) {
        for (const i = 0; i < feed.length; i++) {
          feed[i].distance /= 1609;
          if (feed[i].distance  < 1) {
            feed[i].distance *= 5280;
            if(Math.ceil(feed[i].distance) === 1) {
              feed[i].distance = '' + Math.ceil(feed[i].distance) + ' foot';
            } else {
              feed[i].distance = '' + Math.ceil(feed[i].distance) + ' feet';
            }
          } else {
            if(Math.ceil(feed[i].distance) === 1) {
              feed[i].distance = '' + Math.ceil(feed[i].distance) + ' mile';
            } else {
              feed[i].distance = '' + Math.ceil(feed[i].distance) + ' miles';
            }
          }
        }

      }
      console.log(action.payload.data.feed);
      return {
        temp: action.payload.data.feed,
        perm: action.payload.data.feed
      };
    case SEARCH_FILTER:
        const profileSearch = (term) => {
         const JSONtreeSearch = (inputINIT, searchTerm) => {
           const search = inputINIT.map((v) => {
             const JSONtreeSearch1 = (inputINIT, searchTerm) => {
              const returner = false
              const JSONtreeSearch2 = (inputINIT, searchTerm) => {
                const input = inputINIT
                for (const key in input) {
                  if (typeof input[key] === 'object') {
                    JSONtreeSearch2((input[key]), searchTerm);
                  } else if ((input[key].toLowerCase()).includes(searchTerm.toLowerCase())) {
                    returner = true;
                  }
                }
                return returner;
              }
              return JSONtreeSearch2(inputINIT, searchTerm);
            }
            return JSONtreeSearch1(v, searchTerm);
          })
          return search
         }
         const filtered = JSONtreeSearch(state.perm, term)
         const profiles = state.perm.filter((v, i) => filtered[i])
         return profiles;
       }
      return {
        temp: profileSearch(action.payload),
        perm: state.perm
      };
    default:
      //
  }
  return state;
}
