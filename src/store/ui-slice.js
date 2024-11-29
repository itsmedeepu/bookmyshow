import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
  },
  reducers: {
    showNotification: (state, action) => {
      if (!action.payload) {
        state.notification = null;
      } else {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      }
    },
  },
});

export const uiActions = uislice.actions;
export default uislice;
