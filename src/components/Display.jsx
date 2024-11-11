import React, { useContext } from "react";
import "../components/Display.css";
import { Bookingcontext } from "../assets/store/BoookingContext";
function Display({ Quota }) {
  const { bookings } = useContext(Bookingcontext);
  const getSeatsBooked = () => {
    switch (Quota) {
      case "Gold":
        return bookings.goldSeats.seatsBooked;
      case "Silver":
        return bookings.silverSeats.seatsBooked;
      case "Platinum":
        return bookings.platinumSeats.seatsBooked;
      default:
        return [];
    }
  };

  const seatsBooked = getSeatsBooked();
  return (
    <>
      <div className="outer">
        <p>{Quota} Quota seats</p>
        <p>Booked seat No's</p>
        <div className="seat-no">
          {seatsBooked.map((value, index) => {
            return (
              <button key={value} className="display-btn">
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Display;
