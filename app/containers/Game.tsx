import React from 'react';
import styles from '../src/Game.module.scss';
import Navigation from '../components/Navigation';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className={styles.App}>
        <Navigation />
      </div>
    );
  }
}

export default Game;
