import React, { useState } from 'react';
import Gallery from './components/Gallery';
import { cardPropsStorage } from './service/assets';
import Scoreboard from './components/Scoreboard';
import Modal from './components/Modal';
import Header from './components/Header/Header';
import style from './app.css';
import History from './components/History';

function App() {
  const [score, setScore] = useState({ currentScore: 0, record: 0 });
  const [hasWon, setHasWon] = useState(false);

  const handleSelectedCards = (count) => {
    if (count > score.record) {
      setScore({ currentScore: count, record: count });
    } else setScore({ ...score, currentScore: count });

    if (count === cardPropsStorage.length) setHasWon(true);
  };

  return (
    <div id="app">
      {hasWon ? (
        <Modal title="Victory">
          <span>
            You've won! You've correctly guessed {score.currentScore} cards out
            of {cardPropsStorage.length} possible.
          </span>
        </Modal>
      ) : null}
      <Header>
        <Scoreboard {...score}></Scoreboard>
      </Header>
      <main className="app__main">
        <Gallery cards={cardPropsStorage} reportScore={handleSelectedCards} />
        <History scores={[1, 5, 2, 4]}></History>
      </main>
    </div>
  );
}

export default App;
