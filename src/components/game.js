import React from 'react';

import Header from './header';
import Guess from './guess';
import Modal from './game-modal';




export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            modalHidden: true
        };
    }

    newGame() {
        this.setState({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            modalHidden: true
        });
    }

    onWhat() {
      this.setState({
            modalHidden: false
      });
    }

    onClose() {
      this.setState({
        modalHidden: true
      });
    }

    guess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({
                feedback: 'Please enter a valid number'
            });
            return;
        }

        const difference = Math.abs(guess - this.state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}
                  onWhat={() => this.onWhat()}/>
                <Modal onClose={() => this.onClose()} modalHidden={this.state.modalHidden}/>

                  <Guess feedback={this.state.feedback}
                      onGuess={(guess) => this.guess(guess)}
                      guesses={this.state.guesses} />
            </div>
        );
    }
}
