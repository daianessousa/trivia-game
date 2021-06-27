import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ValueContext } from '../context/value';
import { useHistory } from 'react-router-dom';
import './game.scss';

export function Game() {
  const { init, setInit, pontos, setPontos } = React.useContext(ValueContext);
  let history = useHistory();
  const [questions, setQuestions] = useState([]);

  const value = 1;

  function countPointers() {
    console.log(pontos);
    console.log(`valor inicial: ${init}`);
    setInit(init - 1);
    if (init <= 0) history.push('/results');
  }
  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=${value}`)
      .then((response) => {
        setQuestions(response.data.results);
      });
  }, [init]);

  return (
    <div className="game-container">
      <div className="game-box">
        {questions.map((quest) => (
          <div key={quest.question}>
            <h4>{quest.question}</h4>
            <h6>{quest.category}</h6>
            <div>
              <input
                type="radio"
                name="gender"
                value={quest.correct_answer}
                onChange={() => setPontos(pontos + 1)}
              ></input>
              <label>{quest.correct_answer} </label>
              {quest.incorrect_answers.map((op) => (
                <p key={op}>
                  <input type="radio" name="gender" value={op}></input>
                  <label>{op}</label>
                </p>
              ))}
            </div>
          </div>
        ))}
        <button className="button-game" onClick={countPointers}>
          NEXT
        </button>
      </div>
    </div>
  );
}
