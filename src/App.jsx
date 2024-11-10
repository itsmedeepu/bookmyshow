import { useState, useEffect, useContext } from "react";
import "./App.css";
import { Bookingcontext } from "./assets/store/BoookingContext";
import Quota from "./components/Quota";
import Display from "./components/Display";
function App() {
  const { bookings, addTickets } = useContext(Bookingcontext);
  return (
    <>
      <div className="parent">
        <div className="child1">
          <h1>Book My Show</h1>
          <Quota
            qutoName="Gold"
            handleClick={addTickets}
            norows={7}
            nocols={15}
          />
          <Quota
            qutoName="Platinum"
            handleClick={addTickets}
            norows={5}
            nocols={10}
          />
          <Quota
            qutoName="Silver"
            handleClick={addTickets}
            norows={3}
            nocols={9}
          />
        </div>
        <div className="child2">
          <h1>Seats Booked</h1>
          <h3>Total Seats Booked : {bookings.totalBookings}</h3>
          <Display bookings={bookings.goldSeats} Quota={"Gold"} />
          <Display bookings={bookings.platinumSeats} Quota={"Platinum"} />
          <Display bookings={bookings.silverSeats} Quota={"Silver"} />
        </div>
      </div>
    </>
  );
}

export default App;
