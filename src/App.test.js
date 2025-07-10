import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './App';
import api from './links/api';

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
  it('should return initial state with availableTimes from fetchAPI', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    jest.spyOn(api, 'fetchAPI').mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(result).toEqual({
      availableTimes: mockTimes,
      bookedTimesByDate: {},
      currentDate: expect.any(String),
    });

    api.fetchAPI.mockRestore();
  });
});

describe('updateTimes', () => {
  it('should return updated availableTimes from fetchAPI for a given date', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    const mockDate = '2025-07-08';

    jest.spyOn(api, 'fetchAPI').mockReturnValue(mockTimes);

    const initialState = {
      availableTimes: [],
      bookedTimesByDate: {},
      currentDate: '',
    };

    const action = {
      type: 'update',
      date: mockDate,
    };

    const result = updateTimes(initialState, action);

    expect(result.availableTimes).toEqual(mockTimes);
    expect(result.currentDate).toBe(mockDate);

    api.fetchAPI.mockRestore();
  });
});
