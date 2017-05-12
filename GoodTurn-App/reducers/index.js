import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import feedReducer from './reducer_feed';
import gtkyKEY from './reducer_gtky';
import Login from './reducer_login_logout';
import currentLocation from './reducer_location';
import popup from './reducer_popup';
import activated from './activateReducer';


const rootReducer = combineReducers({
  appActivated: activated,
  form: formReducer,
  profiles: feedReducer,
  gtkyKEY,
  login: Login,
  currentLocation,
  popup,
});

export default rootReducer;
