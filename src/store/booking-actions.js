import { uiActions } from "./ui-slice";
import { ticketActions } from "./booking-slice";

export const addDataaction = (data) => {
  return async (dispatch) => {
    const sendData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending data",
          message: "sending data please waii",
        })
      );
      const resp = await fetch(
        `https://mybookingsoftware-20cc4-default-rtdb.firebaseio.com/booking.json`,
        { method: "PUT", body: JSON.stringify(data) }
      );
      if (!resp.ok) {
        throw new Error("Something went bad at server");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "seats booked",
          message: "seats booked sucessfully",
        })
      );

      setTimeout(() => {
        dispatch(uiActions.showNotification(null));
      }, 2000);
    };

    try {
      await sendData();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "failed",
          title: "Failed to Fetch",
          message: error.message,
        })
      );
    }
  };
};

export const fetchdata = () => {
  return async (dispatch) => {
    const fetchdata = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "fetching data ..",
          message: "fetching data from server...",
        })
      );
      const resp = await fetch(
        "https://mybookingsoftware-20cc4-default-rtdb.firebaseio.com/booking.json",
        { method: "GET" }
      );
      if (!resp.ok) {
        throw new Error("Request failed ");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "data fetched sucessfully",
          message: "data fetched from backend server",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.showNotification(null));
      }, 2000);
      const data = await resp.json();
      return data;
    };

    try {
      const data = await fetchdata();
      dispatch(ticketActions.replaceBoookings(data));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "failed",
          title: "Failed to Fetch",
          message: error.message,
        })
      );
    }
  };
};
