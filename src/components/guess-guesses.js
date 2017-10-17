import React from 'react';

import './guess-guesses.css';

export default function Guesses(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guesses" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};
