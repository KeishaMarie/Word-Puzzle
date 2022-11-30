import toggleStartClickReducer from '../../reducers/toggle-start-click-reducer';
import * as c from './../../actions/ActionTypes';

describe('toggleStartClickReducer', () => {
  let action;

  const currentState = {};

  test('Should toggle the Player Form visibility state to true', () => {
    action = {
      type: c.TOGGLE_START_CLICK
    };
    expect(toggleStartClickReducer({}, action)).toEqual(false);
  });
});
