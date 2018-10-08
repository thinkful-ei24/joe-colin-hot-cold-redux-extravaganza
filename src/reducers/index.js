import {NEW_GUESS, NEW_GAME, GENERATE_AURAL_UPDATE } from '../actions/index.js';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};



function feedbackGiver(guess, correctAnswer) {
  const difference = Math.abs(guess - correctAnswer);

  if (difference >= 50) {
    return 'you\'re ice cold'
  } else if (difference >= 30) {
    return "You're Cold...";
  } else if (difference >= 10) {
    return "You're Warm.";
  } else if (difference >= 1) {
    return "You're Hot!";
  }
}


export default (state = initialState, action) => {
  //*************** handle new guesses ****************
  if(action.type === NEW_GUESS) {

    if(state.guess.find(item => item === action.guess)) {
      return Object.assign({}, state, {
        feedback: 'You already guessed that number'
      })
    } else if(action.guess === state.correctAnswer){
      return Object.assign({}, state, {
        feedback: 'You guessed it! Good job'
      })
    } else {
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.guess],
        feedback: feedbackGiver(action.guess, state.correctAnswer)
      })
    }
  }
  // ***************** handle new game *******************
  if(action.type === NEW_GAME) {
    return Object.assign({}, initialState)
    //if problems, reassign correctAnswer to the randomization equation
  }
  if(action.type === GENERATE_AURAL_UPDATE) {
    const { guesses, feedback } = state;

    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize
      ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize
        ? 'In order of most- to least-recent, they are'
        : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    return Object.assign({}, state, {auralStatus});
  }
  //*****  handle no action being taken ************
  else {
    return state;
  }
}

