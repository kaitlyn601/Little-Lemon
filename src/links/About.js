import React from 'react';
import restaurantChef from '../assets/restaurantChef.jpg';
function About() {
  return (
    <section className='about-section'>
      <div className='about-container'>
        <div className='about-text'>
          <h1>About Little Lemon</h1>
          <h3>Family-Owned Mediterranean Delight</h3>
          <p>
            Welcome to Little Lemon — a cozy, family-owned restaurant located in
            the heart of Chicago. We specialize in authentic Mediterranean
            cuisine, blending traditional flavors with modern flair.
          </p>
          <p>
            Whether you're stopping by for our fresh seafood, hand-rolled
            dolmas, or signature lemon cake, every dish is made with passion and
            the finest ingredients.
          </p>
          <p>
            Since opening in 2015, our mission has been simple: to serve great
            food with great hospitality. We can’t wait to welcome you!
          </p>
        </div>

        <div className='about-image'>
          <img src={restaurantChef} alt='Our team at Little Lemon' />
        </div>
      </div>
    </section>
  );
}

export default About;
