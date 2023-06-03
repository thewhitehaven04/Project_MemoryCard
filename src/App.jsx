import './App.css';
import React, { useState } from 'react';
import Gallery from './components/Gallery';
import { cardPropsStorage } from './service/assets';
import Scoreboard from './components/Scoreboard';
import Modal from './components/Modal';

function App() {
  const [score, setScore] = useState({
    record: 0,
    currentScore: 0,
    hasWon: true,
  });

  const handleSelectedCards = (count) => {
    if (count > score.record) setScore({ record: count, currentScore: count });
    else setScore({ ...score, currentScore: count });
  };

  return (
    <div className="App">
      {score.hasWon ? (
        <Modal title="Victory">
          You've won! You've correctly guessed {score.currentScore} out of{' '}
          {cardPropsStorage.length} possible
        </Modal>
      ) : null}
      <Scoreboard {...score}></Scoreboard>
      <Gallery cards={cardPropsStorage} reportScore={handleSelectedCards} />
    </div>
  );
}

export default App;
