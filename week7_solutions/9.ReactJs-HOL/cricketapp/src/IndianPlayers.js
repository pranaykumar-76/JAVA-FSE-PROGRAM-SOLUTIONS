import React from 'react';

const T20players = ['Dhoni', 'Raina', 'Pathan', 'Yuvraj'];
const RanjiPlayers = ['Dravid', 'Laxman', 'Gavaskar'];

// 1. Merge arrays via spread (...) operator
const allIndian = [...T20players, ...RanjiPlayers];

export default function IndianPlayers() {
  // 2. Destructuring: separate odd/even indexed players
  const oddTeam  = allIndian.filter((_, idx) => idx % 2 === 0);
  const evenTeam = allIndian.filter((_, idx) => idx % 2 === 1);

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>Odd Team (destructured via index check)</h3>
      <ul>
        {oddTeam.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>

      <h3>Even Team (destructured via index check)</h3>
      <ul>
        {evenTeam.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
