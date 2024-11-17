import { useContext } from "react";
import "../components/Quota.css";
import { Bookingcontext } from "../assets/store/BoookingContext";

function Quota({ qutoName, norows, nocols }) {
  const { bookings, addTickets } = useContext(Bookingcontext);

  const getSeatsBooked = () => {
    switch (qutoName) {
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
  //create an dynamic 2d array with no of rows and cols
  //create an N*N matrix(2D array based on rows and cols // for sets not an perfect sqaure will deal it later)
  const seats = new Array(norows).fill(new Array(nocols).fill(0));

  return (
    <div>
      <h3>{qutoName} Quota</h3>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {seats.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((seat, colIndex) => (
                <td
                  className={`seat ${
                    seatsBooked.includes(rowIndex + 1 + "-" + (colIndex + 1))
                      ? "booked"
                      : ""
                  }`}
                  key={colIndex}
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <button
                    onClick={(event) =>
                      addTickets(rowIndex + 1, colIndex + 1, event)
                    }
                    value={qutoName.charAt(0)}
                    disabled={seatsBooked.includes(
                      `${rowIndex + 1}-${colIndex + 1}`
                    )}
                  >
                    {`${rowIndex + 1}-${colIndex + 1}`}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Quota;