import React from 'react';

function Testimonials() {
  const testimonials = Array(4).fill({
    rating: 'Rating',
    review: 'Review',
    user: 'User Profile',
  });
  return (
    <section className='testimonials'>
      <div className='container'>
        <h2>Testimonials</h2>
        <div className='testimonial-grid'>
          {testimonials.map((item, idx) => (
            <div className='testimonial-card' key={idx}>
              <div className='rating'>{item.rating}</div>
              <div className='user-pic'>{item.user}</div>
              <p>{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
