import React from 'react';

import GameModal from './game-modal';
import './header.css';

export default class Header extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        if (this.props.onNewGame) {
            this.props.onNewGame();
        }
    }

    onWhat(event) {
        event.preventDefault();
        if (this.props.onWhat) {
            this.props.onWhat();
        }
    }



    render() {
        return (
          <header>
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.onWhat(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
            <h1>HOT or COLD</h1>
            
          </header>
        );
    }
};
