import React, { useReducer, useState } from 'react';
import { useContext } from 'react';


export default function GameContext(props) {
  const GameContext = useContext(null);
  const GameDispatchContext = useContext(null);
  
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState({ currentScore: 0, record: 0 });

  return (
    <GameContext.Provider value={{ score, setScore }}>
    </GameContext.Provider>
  );
}
