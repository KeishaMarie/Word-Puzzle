import React from 'react';

function RandomWord(props){
  return(
    <React.Fragment>
      {props.randomWord.map((letter) => <span>{letter}</span>)}
    </React.Fragment>
  )
}

RandomWord.propTypes = {
  randomWord: PropTypes.array
}


