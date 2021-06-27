import React from 'react';
import '../index.css';
import { ValueContext } from '../context/value';
import { Link } from 'react-router-dom';
import endGameImg from '../assets/endGameImg.png';
import './results.scss';

export function Results() {
  const { pontos, setPontos } = React.useContext(ValueContext);

  return (
    <div className="container-result">
      <div className="box-result">
        <img src={endGameImg} alt="Boy" />
        <h1> SUA PONTUAÇÃO </h1>
        <h1> {pontos}</h1>
        <button
          className="button-result"
          variant="contained"
          color="secondary"
          onClick={() => setPontos(0)}
        >
          <Link to="/">JOGAR NOVAMENTE</Link>
        </button>
      </div>
    </div>
  );
}
