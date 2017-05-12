import { GET_FEED, SEARCH_FILTER } from '../actions/action_feed';
import { LOGOUT } from '../actions/action_login';
import { DELETE_ACCOUNT } from '../actions/action_deleteAccount';
import { SELECT_PROFILE } from '../actions/action_selectProfile';

const INITIAL_STATE = {
  temp: [],
  perm: [],
  selectedProfile: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_PROFILE:
      return {
        ...state,
        selectedProfile: action.payload,
      };
    case GET_FEED:
      const feed = action.payload.data.feed;
      if (feed) {
        for (let i = 0; i < feed.length; i++) {
          feed[i].distance /= 1609;
          if (feed[i].distance < 1) {
            feed[i].distance *= 5280;
            feed[i].distance = `${Math.ceil(feed[i].distance / 100) * 100} feet`;
          } else if (Math.ceil(feed[i].distance) === 1) {
            feed[i].distance = `${Math.ceil(feed[i].distance)} mile`;
          } else {
            feed[i].distance = `${Math.ceil(feed[i].distance)} miles`;
          }
        }
      }
      return {
        ...state,
        temp: feed,
        perm: feed,
        selectedProfile: feed[0],
      };
    case SEARCH_FILTER:
      function profileSearch(term) {
        function JSONtreeSearch(inputINIT, searchTerm) {
          const search = inputINIT.map((v) => {
            function JSONtreeSearch1(inputINIT, searchTerm) {
              let returner = false;
              function JSONtreeSearch2(inputINIT, searchTerm) {
                const input = inputINIT;
                for (const key in input) {
                  if (typeof input[key] === 'object') {
                    JSONtreeSearch2((input[key]), searchTerm);
                  } else if (typeof input[key] === 'number') {
                  } else if ((input[key].toLowerCase()).indexOf(searchTerm.toLowerCase()) > -1) {
                    returner = true;
                  }
                }
                return returner;
              }
              return JSONtreeSearch2(inputINIT, searchTerm);
            }
            return JSONtreeSearch1(v, searchTerm);
          });
          return search;
        }
        const filtered = JSONtreeSearch(state.perm, term);
        const profiles = state.perm.filter((v, i) => filtered[i]);
        return profiles;
      }
      const temp = profileSearch(action.payload);
      return {
        ...state,
        temp,
      };
    case LOGOUT:
      return INITIAL_STATE;
    case DELETE_ACCOUNT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
