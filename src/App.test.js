import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes, defaultTimes } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});
describe('initializeTimes', () => {
  it('should return the correct initial state', () => {
    const result = initializeTimes();
    expect(result).toEqual({
      availableTimes: defaultTimes,
      bookedTimesByDate: {},
      currentDate: '',
    });
  });
});

describe('updateTimes', () => {
  it('should return the same state when no bookings exist for the date', () => {
    const initialState = {
      availableTimes: defaultTimes,
      bookedTimesByDate: {},
      currentDate: '',
    };

    const action = {
      type: 'update',
      date: '2025-07-08',
    };

    const updatedState = updateTimes(initialState, action);

    expect(updatedState.availableTimes).toEqual(defaultTimes);
    expect(updatedState.currentDate).toBe('2025-07-08');
  });
});
