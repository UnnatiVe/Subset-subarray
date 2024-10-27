// App.js or Parent Component
import React from 'react';
import KadaneGame from './KadaneGame';

const array = [1, -2, 3, 4, -1, 2, 1, -5, 4];  // Example array

function App() {
  return (
    <div>
      <KadaneGame array={array} />  {/* Pass the array as a prop */}
    </div>
  );
}

export default App;
