import React from 'react';
import PropTypes from 'prop-types';
import * as c from './../actions/ActionTypes';

class GameController extends React.Component {

  constructor(props) {
    super(props);
    };

    handleStartClick = (playerData) => {
      const { dispatch } = this.props;
      const { name, guessesRemaining, lettersChosen, id } = playerData;
      const action = {
        type: c.ADD_PLAYER,
        name: name,
        guessesRemaining: guessesRemaining,
        letterChosen: lettersChosen,
        id: id
      }
      const action2 = {
        type: c.TOGGLE_START_CLICK
      }
      dispatch(action);
      dispatch(action2);
    }
  }

  export default GameController;




  // Click to start the game
  // Choose random word
  // Check if guessed letter is applicable and Handle visibility of letters (correct/words  chosen already[])
  // Click to submit guessed letter
  // Decrement guesses left
  // Restart & Try Again buttons *{buttonText}
  // Generate message for win/lose *Toggle