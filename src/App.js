import React, { useState } from 'react';
import classes from './App.module.scss';
import ScoreBoard from './ScoreBoard';
import Table from './table';

const initBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function App() {
  const [gameStatus, setGameStatus] = useState([...initBoard]);
  const [turn, setTurn] = useState(1);
  const [scores, setScores] = useState({ p1: 0, p2: 0 });
  const [lastGame, setLastGame] = useState();

  const otherGuy = () => {
    if (turn === 2) {
      setTurn(1);
    } else {
      setTurn(2);
    }
  };

  const moveHandler = (id) => {
    let newStat = gameStatus;
    newStat[id] = turn;
    setGameStatus([...newStat]);
    otherGuy();
    if (gameResult(gameStatus)) {
      otherGuy();
      setScores((prevScor) => {
        let newState = { ...prevScor };
        if (turn === 1) {
          newState = { p1: prevScor.p1 + 1, p2: prevScor.p2 };
          setLastGame('😃 won the last game !');
        } else {
          newState = { p1: prevScor.p1, p2: prevScor.p2 + 1 };
          setLastGame('😎 won the last game !');
        }
        gameRestHandler();
        return newState;
      });
    }
    if (!gameStatus.some((stat) => stat === 0)) {
      gameRestHandler();
      setLastGame(' last game was a tie !');
    }
  };

  const gameRestHandler = () => {
    setGameStatus([...initBoard]);
  };

  return (
    <>
      <div className={classes.area}>
        <ul className={classes.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className={classes.app}>
        <ScoreBoard score={scores} />
        <p>{lastGame}</p>
        <h2>
          It is{' '}
          {turn === 1 ? <span>😃</span> : turn === 2 ? <span>😎</span> : null}'s
          turn !
        </h2>
        <Table moveHandler={moveHandler} gameStatus={gameStatus}></Table>
        <button onClick={gameRestHandler}>Reset Game</button>
      </div>
    </>
  );
}

export default App;

const gameResult = (game) => {
  if (
    (game[0] === game[1] && game[1] === game[2] && game[1] !== 0) ||
    (game[3] === game[4] && game[4] === game[5] && game[4] !== 0) ||
    (game[6] === game[7] && game[7] === game[8] && game[7] !== 0) ||
    (game[0] === game[3] && game[3] === game[6] && game[3] !== 0) ||
    (game[4] === game[1] && game[1] === game[7] && game[1] !== 0) ||
    (game[5] === game[8] && game[8] === game[2] && game[8] !== 0) ||
    (game[0] === game[4] && game[4] === game[8] && game[4] !== 0) ||
    (game[2] === game[4] && game[4] === game[6] && game[4] !== 0)
  ) {
    return true;
  } else {
    return false;
  }
};
