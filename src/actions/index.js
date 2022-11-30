export const addPlayer = (playerData) => {
  const { name, guessesRemaining, lettersChosen, id } = playerData;
  return {
  type: 'ADD_PLAYER',
  name: name,
  guessesRemaining: guessesRemaining, 
  lettersChosen: lettersChosen,
  id: id
  }
}

export const toggleStartClick = () => {
  return {
    type: 'TOGGLE_START_CLICK'
  }
}