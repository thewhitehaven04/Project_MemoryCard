import React, { useState } from 'react';
import Gallery from './components/Gallery';
import { cardPropsStorage } from './service/assets';
import Scoreboard from './components/Scoreboard';
import Header from './components/Header/Header';
import style from './app.css';
import { WinModal } from './components/WinModal';
import Stats from './components/Stats';

function App() {
  const [score, setScore] = useState({ currentScore: 0, record: 0 });
  const [hasWon, setHasWon] = useState(false);
  const [history, setHistory] = useState([]);

  const maxScore = cardPropsStorage.length;

  const updateHistory = (count) => {
    // count lower than current score means the user has selected previously selected card,
    // hence we record the previous score value in the history
    if (count <= score.currentScore) {
      setHistory((history) => [score.currentScore, ...history]);
    }
  };

  const updateScore = (count) => {
    if (count > score.record) {
      setScore({ currentScore: count, record: count });
    } else setScore({ ...score, currentScore: count });
  };

  const handleSelectedCards = (count) => {
    updateHistory(count);
    updateScore(count);
    if (count === maxScore) setHasWon(true);
  };

  return (
    <div id="app">
      {hasWon ? (
        <WinModal score={score.currentScore} maxScore={maxScore} />
      ) : null}
      <Header>
        <Scoreboard {...score}></Scoreboard>
      </Header>
      <main className="app__main">
        <Gallery cards={cardPropsStorage} reportScore={handleSelectedCards} />
        <Stats scores={history}></Stats>
      </main>
    </div>
  );
}

export default App;
