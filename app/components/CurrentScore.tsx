import React from 'react';
import styles from '../src/CurrentScore.module.scss';

const CurrentScore = (props) => {
  return (
    <div className={styles.Scores}>
      <p>Player X Score:</p>
      <p>Player Y Score:</p>
    </div>
  )
}

export default CurrentScore;