import React from 'react';

function BookingSlot({ time, isBooked }) {
  return (
    <li style={{ color: isBooked ? 'gray' : 'green' }}>
      {time} {isBooked ? '(Booked)' : '(Available)'}
    </li>
  );
}

export default BookingSlot;
