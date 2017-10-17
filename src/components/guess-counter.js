import React from 'react';

import './guess-counter.css';

export default function GuessCount(props) {
    return (
        <p className="counter-text">
            Guess #<span id="counter">{props.count}</span>!
        </p>
    );
}
