import React from 'react';
import greekSalad from './assets/greekSalad.jpg';
import lemonDessert from './assets/lemonDessert.jpg';
import bruchetta from './assets/bruchetta.svg';
import { useNavigate } from 'react-router-dom';

function Specials() {
  const navigate = useNavigate();

  const specials = [
    {
      name: 'Greek Salad',
      price: '$12',
      image: greekSalad,
      description:
        'Fresh lettuce, tomatoes, olives, and feta cheese with olive oil dressing.',
    },
    {
      name: 'Bruschetta',
      price: '$10',
      image: bruchetta,
      description:
        'Grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.',
    },
    {
      name: 'Lemon Dessert',
      price: '$8',
      image: lemonDessert,
      description:
        'Moist lemon cake topped with a tangy lemon glaze, perfect for dessert.',
    },
  ];
  return (
    <section className='specials'>
      <div className='container'>
        <div className='special-header-container'>
          <h2>This week's specials!</h2>
          <button className='btn-primary'>Online Menu</button>
        </div>
        <div className='specials-grid'>
          {specials.map((item, idx) => (
            <article className='special-card' key={idx}>
              <img src={item.image} alt={item.name} />
              <h3>
                {item.name} <span className='price'>{item.price}</span>
              </h3>
              <p>{item.description}</p>
              <button
                className='btn-secondary'
                onClick={() => navigate('/orderOnline')}
              >
                Order a delivery
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
