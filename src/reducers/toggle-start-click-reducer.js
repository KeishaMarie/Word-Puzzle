import * as c from '../actions/ActionTypes';

const reducer = (state = false, action) => {
  switch (action.type) {
  case c.TOGGLE_START_CLICK:
    return !state;
  default:
    return state;
  }
}

export default reducer;