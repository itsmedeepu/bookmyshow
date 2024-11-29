import "../components/Display.css";
import { ticketActions } from "../store/booking-slice";
import { useSelector, useDispatch } from "react-redux";
function Display({ Quota }) {
  const bookings = useSelector((state) => state.ticket.bookings);
  const dispatcher = useDispatch();
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

  const handleDelete = (value) => {
    dispatcher(ticketActions.deleteTicket({ seatno: value, quota: Quota }));
  };
  return (
    <>
      <div className="outer">
        <p>{Quota} Quota seats</p>
        <p>Booked seat No's</p>
        <div className="seat-no">
          {seatsBooked.map((value, index) => {
            return (
              <div key={value}>
                <button key={value} className="display-btn">
                  {value}
                </button>
                <button onClick={() => handleDelete(value)}>X</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Display;
