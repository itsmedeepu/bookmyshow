import { createContext, useReducer, useState } from "react";

export const Bookingcontext = createContext({
  bookings: {
    goldSeats: {
      seatsBooked: [],
      noOfSeats: 0,
    },
    silverSeats: {
      seatsBooked: [],
      noOfSeats: 0,
    },
    platinumSeats: {
      seatsBooked: [],
      noOfSeats: 0,
    },
    totalBookings: 0,
  },
  addTickets: () => {},
});

function bookingReducerFunction(state, action) {
  if (action.type === "BOOK_SEATS") {
    const newState = { ...state, totalBookings: state.totalBookings + 1 };
    switch (action.payload.quota) {
      case "G":
        newState.goldSeats = {
          noOfSeats: state.goldSeats.noOfSeats + 1,
          seatsBooked: [
            ...state.goldSeats.seatsBooked,
            action.payload.seatBooked,
          ],
        };
        break;
      case "P":
        newState.platinumSeats = {
          noOfSeats: state.platinumSeats.noOfSeats + 1,
          seatsBooked: [
            ...state.platinumSeats.seatsBooked,
            action.payload.seatBooked,
          ],
        };
        break;
      case "S":
        newState.silverSeats = {
          noOfSeats: state.silverSeats.noOfSeats + 1,
          seatsBooked: [
            ...state.silverSeats.seatsBooked,
            action.payload.seatBooked,
          ],
        };
        break;
      default:
        return state;
    }
    return newState;
  }
}
const BookingcontextProvider = ({ children }) => {
  const maxBookingsperUser = 5;

  const [BookingState, bookingDispatcher] = useReducer(bookingReducerFunction, {
    goldSeats: {
      seatsBooked: [],
      noOfSeats: 0,
    },
    silverSeats: {
      seatsBooked: [],
      noOfSeats: 0,
    },
    platinumSeats: {
      seatsBooked: [],
      noOfSeats: 0,
    },
    totalBookings: 0,
  });

  const isMaximum = () => BookingState.totalBookings >= maxBookingsperUser;

  const handleClick = (rowindex, seatindex, event) => {
    if (isMaximum()) {
      alert(`Max allowed bookings per user is ${maxBookingsperUser}`);
      return;
    }

    const quota = event.target.value;
    const seatBooked = `${rowindex}-${seatindex}`;

    bookingDispatcher({
      type: "BOOK_SEATS",
      payload: {
        quota,
        seatBooked,
      },
    });
  };

  const Bookingctx = {
    bookings: BookingState,
    addTickets: handleClick,
  };

  return (
    <Bookingcontext.Provider value={Bookingctx}>
      {children}
    </Bookingcontext.Provider>
  );
};

export default BookingcontextProvider;
