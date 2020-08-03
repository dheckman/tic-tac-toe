import React from 'react';
import styles from '../src/Navigation.module.scss';
export interface NavigationProps {
  playerWinCount: any,
  playerXScore?: number,
  playerOScore?: number,
  draws?: number,
}

const Navigation: React.FC<NavigationProps> = ({ playerWinCount }) => {
  const { playerXScore, draws, playerOScore } = playerWinCount;
  return (
    <nav className={styles.Navigation}>
      <p className={styles.NavigationPlayer}>Player X Wins: {playerXScore}</p>
      <p className={styles.NavigationPlayer}>Draws: {draws}</p>
      <p className={styles.NavigationPlayer}>Player 0 Wins: {playerOScore}</p>
    </nav>
  )
}

export default Navigation;