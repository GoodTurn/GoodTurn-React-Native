import { combineReducers } from 'redux';
import selectProfile from './reducer_selectProfile';
import feedReducer  from './reducer_feed';
import gtkyKEY from './reducer_gtky';


const rootReducer = combineReducers({
  profiles: feedReducer,
  selectedProfile: selectProfile,
  gtkyKEY: gtkyKEY
});

export default rootReducer;
