import React from 'react';

const players = [
  { name: 'Rohit',   score: 45 },
  { name: 'Virat',   score: 89 },
  { name: 'KL',      score: 63 },
  { name: 'Hardik',  score: 54 },
  { name: 'Jadeja',  score: 72 },
  { name: 'Bumrah',  score: 35 },
  { name: 'Shami',   score: 25 },
  { name: 'Gill',    score: 77 },
  { name: 'Rahul',   score: 68 },
  { name: 'Pant',    score: 91 },
  { name: 'Ashwin',  score: 55 },
];

export default function ListOfPlayers() {
  // 1. map(): render list
  const listItems = players.map((p, idx) => (
    <li key={idx}>{p.name} — {p.score}</li>
  ));

  // 2. filter() + arrow fn: below 70
  const belowSeventy = players
    .filter(p => p.score < 70)
    .map((p, idx) => (
      <li key={idx}>{p.name} scored {p.score}</li>
    ));

  return (
    <div>
      <h2>All Players (using map)</h2>
      <ul>{listItems}</ul>

      <h3>Players Scoring Below 70 (using filter + arrow fn)</h3>
      <ul>{belowSeventy}</ul>
    </div>
  );
}
