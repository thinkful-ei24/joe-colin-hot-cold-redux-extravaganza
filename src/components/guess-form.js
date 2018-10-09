import React from 'react';
import { newGuess } from '../actions/index.js';
import './guess-form.css';
import { connect } from 'react-redux';


export class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const input = event.target.userGuess;

    this.props.dispatch(newGuess(input.value));
    input.value = '';
    input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          required
        />
        <button
          type="submit"
          name="submit"
          id="guessButton"
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(GuessForm);
