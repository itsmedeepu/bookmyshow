import { useState, useEffect } from "react";
import "./App.css";
import Quota from "./components/Quota";
import Display from "./components/Display";
function App() {
  const maxBookingsperUser = 5;

  const [bookings, setBookings] = useState({
    goldSeats: {
      seatsBooked: [],
    },
    silverSeats: {
      seatsBooked: [],
    },
    platinumSeats: {
      seatsBooked: [],
    },
    totalBookings: 0,
  });
  //helper function to check maxmium seats Booked
  function isMaximum() {
    const { totalBookings } = bookings;
    return totalBookings < 5 ? false : true;
  }
  const handleClick = (rowindex, seatindex, event) => {
    if (isMaximum()) {
      alert("max allowed bookings per user is " + maxBookingsperUser);
      return;
    }
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
            totalBookings: prev.totalBookings + 1,
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
            totalBookings: prev.totalBookings + 1,
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
            totalBookings: prev.totalBookings + 1,
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
            qutoName="Platinum"
            bookings={bookings.platinumSeats}
            handleClick={handleClick}
            norows={5}
            nocols={10}
          />
          <Quota
            qutoName="Silver"
            bookings={bookings.silverSeats}
            handleClick={handleClick}
            norows={3}
            nocols={9}
          />
        </div>
        <div className="child2">
          <h1>Seats Booked</h1>
          <h3>Total Seats Booked :{bookings.totalBookings}</h3>
          <Display bookings={bookings.goldSeats} Quota={"Gold"} />
          <Display bookings={bookings.platinumSeats} Quota={"Platinum"} />
          <Display bookings={bookings.silverSeats} Quota={"Silver"} />
        </div>
      </div>
    </>
  );
}

export default App;
