import React from 'react';
import PropTypes from 'prop-types';

function PlayerData(props){

  return(
    <React.Fragment>
      <h3>{props.name}</h3>
      <h4>{props.guessesRemaining}</h4>
      <h3>{props.lettersChosen}</h3>
    </React.Fragment>
  )

  PlayerData.propTypes = {
    name: PropTypes.string,
    guessesRemaining: PropTypes.number,
    lettersChosen: PropTypes.string
  }
}