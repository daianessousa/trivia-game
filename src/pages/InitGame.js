import React from 'react';
import { Link } from 'react-router-dom';
import initGame from '../assets/initGame.png';
import './home.scss';

export function InitGame() {
  return (
    <div className="container">
      <div className="box">
        <img src={initGame} alt="garoto voando" />
        <h1> Iniciar Jogo </h1>
        <button className="button-page">
          <Link to="/game"> Start </Link>
        </button>

        <button className="button-page">
          <Link to="/"> Cancel </Link>
        </button>
      </div>
    </div>
  );
}
