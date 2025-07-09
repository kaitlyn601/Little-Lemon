import './App.css';
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Menu from './links/Menu';
import About from './links/About';
import Home from './links/Home';
import Reservations from './links/Reservations';
import Login from './links/Login';
import OrderOnline from './links/OrderOnline';
import BookingForm from './links/BookingForm';

// Initial list of times
const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Reducer function
function updateTimes(state, action) {
  switch (action.type) {
    case 'update':
      const selectedDate = action.date;
      // Future logic: update based on selectedDate
      return defaultTimes;
    default:
      return state;
  }
}

// Initialize reducer
function initializeTimes() {
  return defaultTimes;
}
function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/booking' element={<Reservations />} />
          <Route path='/orderOnline' element={<OrderOnline />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Hero></Hero>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
