import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';
import { connect } from 'react-redux';

export function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm />
    </section>
  );
}

const mapsStateToProps = (state) => ({
  feedback: state.feedback,
  guessCount: state.guesses.length

})

export default connect(mapsStateToProps)(GuessSection)
