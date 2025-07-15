import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      rating: '⭐⭐⭐⭐⭐',
      user: 'Alice M.',
      review:
        'The food was absolutely delicious and the service was top-notch! Highly recommend the lemon chicken.',
    },
    {
      rating: '⭐⭐⭐⭐',
      user: 'David R.',
      review:
        'Cozy atmosphere and amazing flavors. The bruschetta was a standout for me!',
    },
    {
      rating: '⭐⭐⭐⭐⭐',
      user: 'Samantha K.',
      review:
        'I loved everything about Little Lemon — the fresh ingredients, the friendly staff, and the cozy vibe.',
    },
    {
      rating: '⭐⭐⭐⭐',
      user: 'Michael B.',
      review:
        'Great place for a casual meal with friends. The lemon cake is a perfect way to end dinner.',
    },
  ];
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
