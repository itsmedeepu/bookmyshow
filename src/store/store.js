import { configureStore } from "@reduxjs/toolkit";
import ticketSlice from "./booking-slice";
import uislice from "./ui-slice";

const store = configureStore({
  reducer: { ticket: ticketSlice.reducer, ui: uislice.reducer },
});

export default store;
