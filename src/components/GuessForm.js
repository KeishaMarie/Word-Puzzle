import React from "react";

function GuessForm(){
  return(
    <React.Fragment>
      <form>
        <label>Guess A Letter:</label>
        <input type="text"></input>
        <button type='submit'>Guess</button>
      </form>
    </React.Fragment>
  )
}