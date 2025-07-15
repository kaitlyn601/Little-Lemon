import React from 'react';
import restaurantfood from './assets/restaurantfood.jpg';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className='hero'>
      <div className='container hero-grid'>
        <div className='hero-text'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            className='btn-primary'
            onClick={() => navigate('/orderOnline')}
          >
            Reserve a Table
          </button>{' '}
        </div>
        <div className='hero-image'>
          <img src={restaurantfood} alt='Delicious Food' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
