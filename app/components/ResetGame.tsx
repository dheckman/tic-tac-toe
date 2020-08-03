import React from 'react';
import styles from '../src/ResetGame.module.scss';

export interface ResetGameProps {
  handleResetClick: () => void,
}
const ResetGame: React.FC<ResetGameProps> = ({ handleResetClick }) => {
  return (
    <button
      aria-label="reset game"
      onClick={() => handleResetClick()}
      className={styles.ResetButton}
    >
      Reset Game
    </button>
  )
};

export default ResetGame;