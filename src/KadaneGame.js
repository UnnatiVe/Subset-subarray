import React, { useState, useEffect } from 'react';
import './KadaneGame.css';

const KadaneGame = () => {
  const [array, setArray] = useState([]);
  const [playerPosition, setPlayerPosition] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [maxSum, setMaxSum] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const size = 10;

  // Function to generate a random array with positive and negative values
  const generateArray = () => {
    const arr = Array.from({ length: size }, () => Math.floor(Math.random() * 21) - 10);
    setArray(arr);
    return arr;
  };

  // Kadane's Algorithm to find the maximum subarray sum
  const kadaneAlgorithm = (arr) => {
    let currentSum = arr[0];
    let maxSum = arr[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > currentSum + arr[i]) {
        currentSum = arr[i];
        tempStart = i;
      } else {
        currentSum += arr[i];
      }

      if (currentSum > maxSum) {
        maxSum = currentSum;
        start = tempStart;
        end = i;
      }
    }
    return { maxSum, start, end };
  };

  // Start the game
  useEffect(() => {
    const startGame = () => {
      const arr = generateArray();
      const result = kadaneAlgorithm(arr);
      setMaxSum(result.maxSum);
      setPlayerPosition(0);
      setPlayerScore(arr[0]); // Initial score based on the first position
    };

    startGame();
  }, []);

  const movePlayer = (direction) => {
    if (gameOver) return;

    let newPosition = playerPosition;
    if (direction === 'left' && playerPosition > 0) {
      newPosition--;
    } else if (direction === 'right' && playerPosition < size - 1) {
      newPosition++;
    }

    if (newPosition !== playerPosition) {
      setPlayerPosition(newPosition);
      setPlayerScore(prevScore => prevScore + array[newPosition]);
    }

    // Check if the game is over when reaching the edges
    if (newPosition === 0 || newPosition === size - 1) {
      setGameOver(true);
    }
  };

  const handleBoxClick = (index) => {
    if (index !== playerPosition && !gameOver) {
      movePlayer(index > playerPosition ? 'right' : 'left');
    }
  };

  return (
    <div className="game-container">
      <h1>Kadane's Game</h1>
      <div className="array-container">
        {array.map((num, index) => (
          <div
            key={index}
            className={`array-box ${index === playerPosition ? 'active' : ''}`}
            onClick={() => handleBoxClick(index)}
          >
            {num}
            {index === playerPosition && <div className="player">🧍‍♂️</div>}
          </div>
        ))}
      </div>

      <div className="score-info">
        <p>Current Score: {playerScore}</p>
        {gameOver && <p>Game Over! Final Score: {playerScore}. Correct Max Sum: {maxSum}</p>}
      </div>

      {!gameOver && (
        <div className="controls">
          <button onClick={() => movePlayer('left')}>Move Left</button>
          <button onClick={() => movePlayer('right')}>Move Right</button>
        </div>
      )}
    </div>
  );
};

export default KadaneGame;

