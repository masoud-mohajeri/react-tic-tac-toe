import React from 'react';
import classes from './table.module.scss';
import Tic from './tic';

function Table({ gameStatus, moveHandler }) {
  return (
    <>
      <div className={classes.body}>
        <Tic
          moveHandler={moveHandler.bind(null, 0)}
          value={gameStatus[0]}
          right
          bottom
        />
        <Tic
          moveHandler={moveHandler.bind(null, 1)}
          value={gameStatus[1]}
          right
          bottom
          left
        />
        <Tic
          moveHandler={moveHandler.bind(null, 2)}
          value={gameStatus[2]}
          bottom
          left
        />
        {/*  */}
        <Tic
          moveHandler={moveHandler.bind(null, 3)}
          value={gameStatus[3]}
          right
          bottom
          top
        />
        <Tic
          moveHandler={moveHandler.bind(null, 4)}
          value={gameStatus[4]}
          right
          bottom
          left
          top
        />
        <Tic
          moveHandler={moveHandler.bind(null, 5)}
          value={gameStatus[5]}
          bottom
          left
          top
        />
        {/*  */}
        <Tic
          moveHandler={moveHandler.bind(null, 6)}
          value={gameStatus[6]}
          right
          top
        />
        <Tic
          moveHandler={moveHandler.bind(null, 7)}
          value={gameStatus[7]}
          right
          left
          top
        />
        <Tic
          moveHandler={moveHandler.bind(null, 8)}
          value={gameStatus[8]}
          left
          top
        />
      </div>
    </>
  );
}

export default Table;
