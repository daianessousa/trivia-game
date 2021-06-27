import React from 'react';
import { useState } from 'react';

export const ValueContext = React.createContext({});

export const GameProvider = (props) => {
  const [init, setInit] = useState(0);
  const [pontos, setPontos] = useState(0);

  return (
    <ValueContext.Provider value={{ init, setInit, pontos, setPontos }}>
      {props.children}
    </ValueContext.Provider>
  );
};
