import React from 'react';
import styles from '../src/CurrentGameStatus.module.scss';

export interface CurrentGameStatusProps {
  gameStatus: string
}

const CurrentGameStatus: React.FC<CurrentGameStatusProps> = ({ gameStatus }) => {
  return (
    <div className={styles.GameStatus}>
      Game Status: {gameStatus}
    </div>
  )
}

export default CurrentGameStatus;