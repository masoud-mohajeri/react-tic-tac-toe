import React from 'react';
import classes from './tic.module.scss';
import ding from './assets/ding.mp3';

function Tic({ value, moveHandler, right, left, top, bottom }) {
  const audio = new Audio(ding);

  const checkMoved = () => {
    if (value === 0) {
      audio.play();
      return moveHandler();
    }
  };

  return (
    <div
      onClick={checkMoved}
      className={[
        classes.tic,
        right && classes.br,
        left && classes.bl,
        bottom && classes.bb,
        top && classes.bt,
      ].join(' ')}
    >
      {value === 0 ? (
        <p> 🍀</p>
      ) : value === 1 ? (
        <p>😃</p>
      ) : value === 2 ? (
        <p>😎</p>
      ) : null}
    </div>
  );
}

Tic.defaultProps = {
  value: 0,
  right: false,
  left: false,
  top: false,
  bottom: false,
};

export default Tic;
