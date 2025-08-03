import React, { useState } from 'react';

function UserPage({ onLogout }) {
  // Simulate booking form only for logged-in users
  const [bookingInfo, setBookingInfo] = useState({ flightId: '', seats: 1 });

  const handleChange = e => {
    const { name, value } = e.target;
    setBookingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleBook = () => {
    alert(`Booked flight #${bookingInfo.flightId} for ${bookingInfo.seats} seat(s)!`);
  };

  return (
    <div>
      <h2>Welcome, User!</h2>
      <button onClick={onLogout}>Logout</button>

      <h3>Book a Flight:</h3>
      <div>
        <label htmlFor="flightId">Flight ID:</label>
        <input
          id="flightId"
          name="flightId"
          value={bookingInfo.flightId}
          onChange={handleChange}
          placeholder="e.g., 1"
        />
      </div>
      <div>
        <label htmlFor="seats">Seats:</label>
        <input
          id="seats"
          name="seats"
          type="number"
          min="1"
          value={bookingInfo.seats}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleBook}>Book Ticket</button>
    </div>
  );
}

export default UserPage;
