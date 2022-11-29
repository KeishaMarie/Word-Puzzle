import React from 'react';
import PropTypes from 'prop-types';

function PlayerForm(){

  return(
    <React.Fragment>
      <form>
        <label>Player Name:</label>
        <input type="text" placeholder='Name'></input>
        <button type='submit'>Start Game</button>
      </form>
    </React.Fragment>
  
  )
}