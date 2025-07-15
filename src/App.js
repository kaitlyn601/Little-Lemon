import './App.css';
import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Menu from './links/Menu';
import About from './links/About';
import Login from './links/Login';
import BookingForm from './links/BookingForm';
import ConfirmedBooking from './links/ConfirmedBooking';
import { fetchAPI, submitAPI } from './links/api';
import SignUp from './links/SignUp';
import OrderOnline from './links/OrderOnline';
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
  const navigate = useNavigate();
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/booking-confirmed');
    } else {
      alert('Something went wrong. Please try again.');
    }
  };
  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <Specials />
              <Testimonials />
            </>
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route
          path='/bookings'
          element={
            <BookingForm
              availableTimes={state.availableTimes}
              bookedTimes={state.bookedTimesByDate[state.currentDate] || []}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path='/orderOnline' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/booking-confirmed' element={<ConfirmedBooking />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
