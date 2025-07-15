import React from 'react';
import greekSalad from '../assets/greekSalad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemonDessert.jpg';

// Example menu data (replace or fetch from API)
const menuItems = [
  {
    id: 1,
    name: 'Greek Salad',
    description:
      'Fresh lettuce, tomatoes, olives, and feta cheese with olive oil dressing.',
    price: '$12',
    image: greekSalad,
  },
  {
    id: 2,
    name: 'Bruchetta',
    description:
      'Grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.',
    price: '$10',
    image: bruchetta,
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    description:
      'Moist lemon cake topped with a tangy lemon glaze, perfect for dessert.',
    price: '$8',
    image: lemonDessert,
  },
  // Add more items as needed
];

function Menu() {
  return (
    <section className='menu-section'>
      <h1>Our Menu</h1>
      <div className='menu-grid'>
        {menuItems.map((item) => (
          <div className='menu-card' key={item.id}>
            <img src={item.image} alt={item.name} className='menu-image' />
            <div className='menu-info'>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className='menu-price'>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
