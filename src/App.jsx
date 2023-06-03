import React, { useState } from 'react';
import Gallery from './components/Gallery';
import { cardPropsStorage } from './service/assets';
import Scoreboard from './components/Scoreboard';
import Modal from './components/Modal';
import Header from './components/Header/Header';

function App() {
  const [score, setScore] = useState({
    record: 0,
    currentScore: 0,
    hasWon: false,
  });

  const handleSelectedCards = (count) => {
    if (count > score.record)
      setScore({ ...score, record: count, currentScore: count });
    else setScore({ ...score, currentScore: count });
  };

  return (
    <div id="app">
      {score.hasWon ? (
        <Modal title="Victory">
          You've won! You've correctly guessed {score.currentScore} cards out of
          {cardPropsStorage.length} possible.
        </Modal>
      ) : null}
      <Header>
        <Scoreboard {...score}></Scoreboard>
      </Header>
      <Gallery cards={cardPropsStorage} reportScore={handleSelectedCards} />
    </div>
  );
}

export default App;
