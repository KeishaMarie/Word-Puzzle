import addPlayerReducer from '../../reducers/add-player-reducer';
import * as c from '../../actions/ActionTypes';

describe('addPlayerReducer', () => {
  let action;

  const currentState = {};

  const playerData = {
  name: 'Ryan',
  guessesRemaining: '6',
  lettersChosen: [],
  id: 1
}

  test('Should successfully add a player to playerList', () => {
    const { name, guessesRemaining, lettersChosen, id} = playerData;
    action = {
      type: c.ADD_PLAYER,
      name: name,
      guessesRemaining: guessesRemaining,
      lettersChosen: lettersChosen,
      id: id
    };
    expect(addPlayerReducer({}, action)).toEqual({
      [id] : {
      name: name,
      guessesRemaining: guessesRemaining,
      lettersChosen: lettersChosen,
      id: id
      }
    }); 
  });
});