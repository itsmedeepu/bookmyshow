import { useState, useEffect } from "react";
import "./App.css";
import Quota from "./components/Quota";
//track no of seats booked by user its dummy use state to maintain...
let clicked = 0;
function App() {
  const maxBookingsperUser = 5;

  const [bookings, setBookings] = useState({
    goldSeats: {
      noOfSeats: 0,
      seatsBooked: [],
    },
    silverSeats: {
      noOfSeats: 0,
      seatsBooked: [],
    },
    platinumSeats: {
      noOfSeats: 0,
      seatsBooked: [],
    },
  });
  const handleClick = (rowindex, seatindex, event) => {
    if (clicked === maxBookingsperUser) {
      alert("max allowed bookings per user is " + maxBookingsperUser);
      return;
    }
    clicked++;
    const quota = event.target.value;
    //alert(quota + " " + rowindex + " " + seatindex);
    const seatBooked = rowindex + "-" + seatindex;

    switch (quota) {
      case "G":
        setBookings((prev) => {
          return {
            ...prev,
            goldSeats: {
              noOfSeats: prev.goldSeats.noOfSeats + 1,
              seatsBooked: [...prev.goldSeats.seatsBooked, seatBooked],
            },
          };
        });
        break;
      case "P":
        setBookings((prev) => {
          return {
            ...prev,
            platinumSeats: {
              noOfSeats: prev.platinumSeats.noOfSeats + 1,
              seatsBooked: [...prev.platinumSeats.seatsBooked, seatBooked],
            },
          };
        });
        break;
      case "S":
        setBookings((prev) => {
          return {
            ...prev,
            silverSeats: {
              noOfSeats: prev.silverSeats.noOfSeats + 1,
              seatsBooked: [...prev.silverSeats.seatsBooked, seatBooked],
            },
          };
        });
        break;

      default:
        return bookings;
    }
  };

  useEffect(() => {
    console.log(bookings);
  }, [bookings]);
  return (
    <>
      <div className="parent">
        <div className="child1">
          <h1>Book My Show</h1>
          <Quota
            qutoName="Gold"
            bookings={bookings.goldSeats}
            handleClick={handleClick}
            norows={7}
            nocols={15}
          />
          <Quota
            qutoName="Silver"
            bookings={bookings.silverSeats}
            handleClick={handleClick}
            norows={5}
            nocols={10}
          />
          <Quota
            qutoName="Platinum"
            bookings={bookings.platinumSeats}
            handleClick={handleClick}
            norows={3}
            nocols={9}
          />
        </div>
        <div className="child2">
          <h1>Total seats Booked</h1>
          <table className="display">
            <tr>
              <td>Total seats Booked</td>
              <td>{clicked}</td>
            </tr>
            <tr>
              <td>gold quota seats</td>
              <select>
                {bookings.goldSeats.seatsBooked.map((value, index) => (
                  <option>Seat No:{value}</option>
                ))}
              </select>
            </tr>
            <tr>
              <td>platinum quota seats</td>
              <select>
                {bookings.platinumSeats.seatsBooked.map((value, index) => (
                  <option>Seat No:{value}</option>
                ))}
              </select>
            </tr>
            <tr>
              <td>silver quota seats</td>
              <select>
                {bookings.silverSeats.seatsBooked.map((value, index) => (
                  <option>Seat No:{value}</option>
                ))}
              </select>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
