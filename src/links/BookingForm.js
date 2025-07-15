import React from 'react';
import { useState } from 'react';
import BookingSlot from './BookingSlot';

function BookingForm({ availableTimes, bookedTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'update', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
    dispatch({ type: 'book', date, time });
  };
  const isFormValid = date && time && guests >= 1 && guests <= 10 && occasion;
  return (
    <>
      <div className='form-wrapper'>
        {/* Heading on top */}
        <h2 className='form-heading'>Make a Reservation</h2>

        {/* Row container: form + booking slots */}
        <div className='form-content'>
          <form onSubmit={handleSubmit} className='reservation-form'>
            <label htmlFor='res-date'>Choose date</label>
            <input
              type='date'
              id='res-date'
              value={date}
              onChange={handleDateChange}
              required
            />

            <label htmlFor='res-time'>Choose time</label>
            <select
              id='res-time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value=''>Select time</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <label htmlFor='guests'>Number of guests</label>
            <input
              type='number'
              id='guests'
              min='1'
              max='10'
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />

            <label htmlFor='occasion'>Occasion</label>
            <select
              id='occasion'
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value=''>Select occasion</option>
              <option value='Birthday'>Birthday</option>
              <option value='Anniversary'>Anniversary</option>
              <option value='Other'>Other</option>
            </select>

            <button type='submit' disabled={!isFormValid}>
              Make Your Reservation
            </button>
          </form>

          <div className='booking-slot'>
            <h3>Today's Booking Slots</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[...availableTimes, ...bookedTimes].sort().map((slot) => (
                <BookingSlot
                  key={slot}
                  time={slot}
                  isBooked={bookedTimes.includes(slot)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      );
    </>
  );
}

export default BookingForm;
