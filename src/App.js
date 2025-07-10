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
import { fetchAPI, submitAPI } from './assets/api';

// Initial list of times
const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Reducer
function updateTimes(state, action) {
  switch (action.type) {
    case 'update': {
      const date = action.date;
      const times = fetchAPI(new Date(date));
      const booked = state.bookedTimesByDate[date] || [];
      return {
        ...state,
        currentDate: date,
        availableTimes: times.filter((t) => !booked.includes(t)),
      };
    }

    case 'book': {
      const { date, time } = action;
      const updatedBooked = {
        ...state.bookedTimesByDate,
        [date]: [...(state.bookedTimesByDate[date] || []), time],
      };
      const available = fetchAPI(new Date(date)).filter(
        (t) => !updatedBooked[date].includes(t),
      );
      return {
        ...state,
        bookedTimesByDate: updatedBooked,
        availableTimes: available,
      };
    }

    default:
      return state;
  }
}

function initializeTimes() {
  const today = new Date();
  const times = fetchAPI(today); // This returns an array
  return {
    availableTimes: times,
    bookedTimesByDate: {},
    currentDate: today.toISOString().split('T')[0], // formatted as YYYY-MM-DD
  };
}
function App() {
  const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes);

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
        <BookingForm
          availableTimes={state.availableTimes}
          bookedTimes={state.bookedTimesByDate[state.currentDate] || []}
          dispatch={dispatch}
        />
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
