import React from 'react';

function GuestPage({ onLogin }) {
  // Flight details visible to everyone
  const flights = [
    { id: 1, from: 'NYC', to: 'LA', time: '10:00 AM' },
    { id: 2, from: 'SF', to: 'Chicago', time: '1:00 PM' },
  ];

  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <button onClick={onLogin}>Login to Book Tickets</button>

      <h3>Available Flights:</h3>
      <ul>
        {flights.map(f => (
          <li key={f.id}>
            {f.from} → {f.to} @ {f.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestPage;
