import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';


describe('Word Puzzle actions', () => {
  const playerData = {
    name: 'Ryan',
    guessesRemaining: '6',
    lettersChosen: [],
    id: 1
  }

  it('addPlayer should create ADD_PLAYER action', () => {
    const { name, guessesRemaining, lettersChosen, id} = playerData;
    expect(actions.addPlayer(playerData)).toEqual({
      type: c.ADD_PLAYER,
      name: name,
      guessesRemaining: guessesRemaining,
      lettersChosen: lettersChosen,
      id: id
      });
  });

  it('toggleStartClick should toggle the Player Form', () => {
    expect(actions.toggleStartClick()).toEqual({
      type: c.TOGGLE_START_CLICK
    });
  });

});