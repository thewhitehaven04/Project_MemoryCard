import './App.css';
import React, { createContext, useState } from 'react';
import Gallery from './components/Gallery';
import { cardPropsStorage } from './service/assets';
import Scoreboard from './components/Scoreboard';

function App() {
  const [score, setScore] = useState({
    record: 0,
    currentScore: 0,
  });

  const handleSelectedCards = (count) => {
    if (count > score.record) setScore({ record: count, currentScore: count });
    else setScore({ ...score, currentScore: count });
  };

  return (
    <div className="App">
      <Scoreboard {...score}></Scoreboard>
      <Gallery cards={cardPropsStorage} reportScore={handleSelectedCards} />
    </div>
  );
}

export default App;
