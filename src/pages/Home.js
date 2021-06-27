import './home.scss';
import React from 'react';
import { ValueContext } from '../context/value';
import { Link } from 'react-router-dom';
import homeImg from '../assets/homeImage.png';
export function Home() {
  const { setInit } = React.useContext(ValueContext);

  return (
    <div className="container">
      <div className="box">
        <img src={homeImg} alt="Garota no Foguete" />
        <h1> Trivia Game </h1>
        <h4>Quantas perguntas você quer responder?</h4>
        <input
          type="text"
          name="value"
          onChange={(e) => setInit(parseInt(e.target.value) - 1)}
        />
        <button className="button-page" type="submit">
          <Link to="/initgame"> INICIAR </Link>
        </button>
      </div>
    </div>
  );
}
