import React, { useState } from 'react';
import greekSalad from '../assets/greekSalad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemonDessert.jpg';

const sampleMenu = [
  {
    id: 1,
    name: 'Greek Salad',
    price: 12,
    image: greekSalad,
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: 10,
    image: bruchetta,
  },
  {
    id: 3,
    name: 'Lemon Cake',
    price: 8,
    image: lemonDessert,
  },
];

function OrderOnline() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <section className='order-online'>
      <div className='container'>
        <h1>Order Online</h1>

        <div className='menu-list'>
          {sampleMenu.map((item) => (
            <div className='menu-item' key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className='menu-item-image'
                loading='lazy'
              />
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className='cart'>
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default OrderOnline;
