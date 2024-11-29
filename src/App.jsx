import "./App.css";
import Quota from "./components/Quota";
import Display from "./components/Display";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { useEffect } from "react";
import { addDataaction, fetchdata } from "./store/booking-actions";

function App() {
  // const { bookings, addTickets } = useContext(Bookingcontext);

  const bookings = useSelector((state) => state.ticket.bookings);
  const changed = useSelector((state) => state.ticket.changed);
  const dispatcher = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatcher(fetchdata());
  }, []);
  useEffect(() => {
    if (changed) {
      dispatcher(addDataaction(bookings));
    }
  }, [bookings, dispatcher, changed]);

  return (
    <>
      {notification && <Notification />}
      <div className="parent">
        <div className="child1">
          <h1>Book My Show</h1>
          <Quota qutoName="Gold" norows={7} nocols={15} />
          <Quota qutoName="Platinum" norows={5} nocols={10} />
          <Quota qutoName="Silver" norows={3} nocols={9} />
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
