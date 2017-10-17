import React from 'react';

import GuessForm from './guess-form';
import GuessCounter from './guess-counter';
import Guesses from './guess-guesses';

import './guess.css';

export default function Guess(props) {
    return (
        <section className="guess">
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm onGuess={props.onGuess} />
            <GuessCounter count={props.guesses.length} />
            <Guesses guesses={props.guesses} />
        </section>

    );
}
