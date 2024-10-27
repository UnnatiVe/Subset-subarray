import React from 'react';
import './ArrayDisplay.css'; // Add CSS for visual appeal

const ArrayDisplay = ({ array, playerPosition }) => {
  return (
    <div className="array-display">
      {array.map((num, index) => (
        <div key={index} className={`box ${playerPosition === index ? 'player' : ''}`}>
          {playerPosition === index ? '🧍‍♂️' : num}
        </div>
      ))}
    </div>
  );
};

export default ArrayDisplay;

