

//new game action
export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME,
});

//make a guess action
export const NEW_GUESS = 'NEW_GUESS';
export const newGuess = (guess) => ({
  type: NEW_GUESS,
  guess
})



//get aural update
export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
  type: GENERATE_AURAL_UPDATE
});

