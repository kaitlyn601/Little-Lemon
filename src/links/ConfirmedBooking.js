import React from 'react';

function ConfirmedBooking() {
  return (
    <div className='confirmation-wrapper'>
      <div className='confirmation-card'>
        <div className='emoji'>🎉</div>
        <h1>Booking Confirmed!</h1>
        <p>
          Your reservation has been successfully submitted. We look forward to
          seeing you!
        </p>
        <a href='/' className='back-home-button'>
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
