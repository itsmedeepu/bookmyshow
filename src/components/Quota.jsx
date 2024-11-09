import "../components/Quota.css";

function Quota({ qutoName, handleClick, bookings, norows, nocols }) {
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
                    bookings.seatsBooked.includes(
                      rowIndex + 1 + "-" + (colIndex + 1)
                    )
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
                      handleClick(rowIndex + 1, colIndex + 1, event)
                    }
                    value={qutoName.charAt(0)}
                    disabled={bookings.seatsBooked.includes(
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
