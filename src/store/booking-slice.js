import { createSlice, configureStore } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
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
    changed: false,
  },
  reducers: {
    replaceBoookings: (state, action) => {
      state.bookings = {
        goldSeats: {
          seatsBooked: action.payload.goldSeats.seatsBooked || [],
          noOfSeats: action.payload.goldSeats.noOfSeats,
        },
        silverSeats: {
          seatsBooked: action.payload.silverSeats.seatsBooked || [],
          noOfSeats: action.payload.silverSeats.noOfSeats,
        },
        platinumSeats: {
          seatsBooked: action.payload.platinumSeats.seatsBooked || [],
          noOfSeats: action.payload.platinumSeats.noOfSeats,
        },
        totalBookings: action.payload.totalBookings || 0,
      };
    },
    addTicket: (state, action) => {
      // if (state.bookings.totalBookings >= 5) {
      //   return;
      // }
      if (action.payload.quota === "Gold") {
        state.bookings.goldSeats.seatsBooked.push(action.payload.seatno);
        state.bookings.totalBookings++;
      }
      if (action.payload.quota === "Silver") {
        state.bookings.silverSeats.seatsBooked.push(action.payload.seatno);
        state.bookings.totalBookings++;
      }
      if (action.payload.quota === "Platinum") {
        state.bookings.platinumSeats.seatsBooked.push(action.payload.seatno);
        state.bookings.totalBookings++;
      }
      state.changed = true;
    },
    deleteTicket: (state, action) => {
      if (action.payload.quota === "Gold") {
        state.bookings.goldSeats.seatsBooked =
          state.bookings.goldSeats.seatsBooked.filter(
            (seatno) => seatno !== action.payload.seatno
          );
        state.bookings.totalBookings--;
      }
      if (action.payload.quota === "Silver") {
        state.bookings.silverSeats.seatsBooked =
          state.bookings.silverSeats.seatsBooked.filter(
            (seatno) => seatno !== action.payload.seatno
          );
        state.bookings.totalBookings--;
      }
      if (action.payload.quota === "Platinum") {
        state.bookings.platinumSeats.seatsBooked =
          state.bookings.platinumSeats.seatsBooked.filter(
            (seatno) => seatno !== action.payload.seatno
          );
        state.bookings.totalBookings--;
      }
      state.changed = true;
    },
  },
});
export const ticketActions = ticketSlice.actions;
export default ticketSlice;
