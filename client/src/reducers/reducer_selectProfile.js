import { SELECT_PROFILE } from '../actions/action_selectProfile'

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_PROFILE:
      return action.payload;
    default:
      //nothing
  }
  return state;
}
