import React from "react";
import "../components/Display.css";

function Display({ bookings, Quota }) {
  return (
    <>
      <div className="outer">
        <p>{Quota} Quota seats</p>
        <p>Booked seat No's</p>
        <div className="seat-no">
          {bookings.seatsBooked.map((value, index) => {
            return <button className="display-btn">{value}</button>;
          })}
        </div>
      </div>
    </>
  );
}

export default Display;
