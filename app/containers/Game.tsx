import React,{ useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Square from '../components/Square';
import CurrentGameStatus from '../components/CurrentGameStatus';
import ResetGame from '../components/ResetGame';
import styles from '../src/Game.module.scss';

const Game = () => {
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ isXNext, setIsXNext ] = useState(true);
  const initialScores = JSON.parse(localStorage.getItem('scores'));
  let initialXScore;
  let initialOScore;
  let initialDraws;
  if (initialScores !== null) {
    initialXScore = initialScores.playerXWinCount;
    initialOScore = initialScores.playerOWinCount;
    initialDraws = initialScores.draws;
  }
  const [ playerWinCount, setWinCount ] = useState({
    playerXScore: initialXScore || 0,
    playerOScore: initialOScore || 0,
    draws: initialDraws || 0,
  });
  const { playerXScore, playerOScore, draws} = playerWinCount;
  useEffect(() => {
    const scores = {
      'playerXWinCount': playerXScore,
      'playerOWinCount': playerOScore,
      'draws': draws
    }
    return localStorage.setItem('scores', JSON.stringify(scores));
    
  }, [playerWinCount]);
  const nextPlayer = isXNext ? "X" : "O"
  const winner = calculateWinner(squares);

  const updateScoreTotals = () => {
    setWinCount({
      playerXScore: playerXScore + (winner === 'X' ? 1 : 0),
      playerOScore: playerOScore + (winner === 'O' ? 1 : 0),
      draws: draws + (isBoardFull(squares) ? 1 : 0)
    })
  }
  useEffect(updateScoreTotals,[winner]);
  useEffect(updateScoreTotals,[isBoardFull(squares)]);
  
  function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }

  function renderSquare(i: any) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          if (squares[i] != null || winner != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = nextPlayer;
          setSquares(nextSquares);
          setIsXNext(!isXNext);
        }}
      />
    )
  }

  function handleResetClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  function getStatus() {
    if (winner) {
      return `The winner is: ${winner}!`;
    } else if (isBoardFull(squares)) {
      return "Draw!";
    } else {
      return `Next player: ${nextPlayer}`;
    }
  }

  return (
    <div className={styles.Game}>
      <Navigation playerWinCount={playerWinCount} />
      <div className={styles.GameBoard}>
        {Array(...Array(9)).map((v, i) => renderSquare(i))}
      </div>
        <CurrentGameStatus gameStatus={getStatus()} />
        <ResetGame handleResetClick={handleResetClick} />
    </div>
  )
}

function calculateWinner(squares: any) {
  const possibleRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (let i = 0; i < possibleRows.length; i++) {
    const [a, b, c] = possibleRows[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;