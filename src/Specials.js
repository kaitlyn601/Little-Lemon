import React from 'react';
import greekSalad from './assets/greekSalad.jpg';
import lemonDessert from './assets/lemonDessert.jpg';
import bruchetta from './assets/bruchetta.svg';
function Specials() {
  const specials = [
    {
      name: 'Greek Salad',
      price: '$12.99',
      image: greekSalad,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum.',
    },
    {
      name: 'Bruschetta',
      price: '$10.99',
      image: bruchetta,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum.',
    },
    {
      name: 'Lemon Dessert',
      price: '$8.00',
      image: lemonDessert,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum.',
    },
  ];
  return (
    <section className='specials'>
      <div className='container'>
        <h2>This week's specials!</h2>
        <div className='specials-grid'>
          {specials.map((item, idx) => (
            <article className='special-card' key={idx}>
              <img src={item.image} alt={item.name} />
              <h3>
                {item.name} <span className='price'>{item.price}</span>
              </h3>
              <p>{item.description}</p>
              <button className='btn-secondary'>Order a delivery</button>
            </article>
          ))}
        </div>
        <div className='online-menu-container'>
          <button className='btn-primary'>Online Menu</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;
