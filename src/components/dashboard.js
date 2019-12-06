import React, { useState } from 'react';
import Display from './Display';

const Dashboard = (props) => {
  const [balls, setBalls] = useState(0);
  const [strike, setStrike] = useState(0);

  const handleStrike = () => {
    if(strike < 3) {
      setStrike(strike + 1);
    }else if (strike === 3) {
      alert("You're out!");
      setStrike(0);
      setBalls(0);
    };
  };

    const handleBalls = () => {
    if(balls < 4) {
      setBalls(balls + 1);
    }else if (balls === 4) {
      alert("You walk!");
      setStrike(0);
      setBalls(0);
    }
  };

  const handleFoul = () => {
    if(strike < 2) {
      setStrike(strike + 1);
    };
  };

  const handleHit = () => {
    setStrike(0);
    setBalls(0);
  };

  return(
    <div>
      <Display ballsData={balls} strikeData={strike} />
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleBalls}>Ball</button>
      <button onClick={handleFoul}>Foul</button>
      <button onClick={handleHit}>Hit</button>
    </div>
  )
}

export default Dashboard