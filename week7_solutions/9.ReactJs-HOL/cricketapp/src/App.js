import React, { useState } from 'react';
import ListOfPlayers from './ListOfPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  // Toggle which component to show
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Cricket App</h1>
      <button onClick={() => setFlag(prev => !prev)}>
        Toggle Component (flag is {flag.toString()})
      </button>
      <hr />
      {flag 
        ? <ListOfPlayers /> 
        : <IndianPlayers />
      }
    </div>
  );
}

export default App;
