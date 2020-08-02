import React from 'react';
import styles from '../src/Navigation.module.scss';
import CurrentScore from '../components/CurrentScore';

const Navigation = (props) => {

  return (
    <nav className={styles.Navigation}>
      <CurrentScore />
    </nav>
  )
}

export default Navigation;