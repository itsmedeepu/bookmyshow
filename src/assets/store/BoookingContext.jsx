import { createContext, useState } from "react";

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

const BookingcontextProvider = ({ children }) => {
  const maxBookingsperUser = 5;
  const [bookings, setBookings] = useState({
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

  const isMaximum = () => bookings.totalBookings >= maxBookingsperUser;

  const handleClick = (rowindex, seatindex, event) => {
    if (isMaximum()) {
      alert(`Max allowed bookings per user is ${maxBookingsperUser}`);
      return;
    }

    const quota = event.target.value;
    const seatBooked = `${rowindex}-${seatindex}`;

    setBookings((prev) => {
      const newState = { ...prev, totalBookings: prev.totalBookings + 1 };
      switch (quota) {
        case "G":
          newState.goldSeats = {
            noOfSeats: prev.goldSeats.noOfSeats + 1,
            seatsBooked: [...prev.goldSeats.seatsBooked, seatBooked],
          };
          break;
        case "P":
          newState.platinumSeats = {
            noOfSeats: prev.platinumSeats.noOfSeats + 1,
            seatsBooked: [...prev.platinumSeats.seatsBooked, seatBooked],
          };
          break;
        case "S":
          newState.silverSeats = {
            noOfSeats: prev.silverSeats.noOfSeats + 1,
            seatsBooked: [...prev.silverSeats.seatsBooked, seatBooked],
          };
          break;
        default:
          return prev;
      }
      return newState;
    });
  };

  const Bookingctx = {
    bookings,
    addTickets: handleClick,
  };

  return (
    <Bookingcontext.Provider value={Bookingctx}>
      {children}
    </Bookingcontext.Provider>
  );
};

export default BookingcontextProvider;
