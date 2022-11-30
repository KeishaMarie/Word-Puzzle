import * as c from '../actions/ActionTypes';

const reducer = (state = false, action) => {
  const { name, guessesRemaining, lettersChosen, id } = action; 
  switch (action.type) {
    case c.ADD_PLAYER:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          guessesRemaining: guessesRemaining,
          lettersChosen: lettersChosen,
          id: id
        }
      });
  }
}
export default reducer;