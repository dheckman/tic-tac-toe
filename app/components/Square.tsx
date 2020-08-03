import React from 'react';
import styles from '../src/Square.module.scss';

export interface SquareProps {
  onClick: () => void,
  value: number,
}

const Square: React.FC<SquareProps> = ({ onClick, value }) => (
  <button
    className={styles.Square}
    onClick={onClick}
    aria-label="tic tac toe square"
  >
    {value}
  </button>
)

export default Square;