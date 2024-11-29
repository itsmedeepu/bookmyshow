import "../components/Notification.css";
import { useSelector, useDispatch } from "react-redux";
function Notification() {
  const notification = useSelector((state) => state.ui.notification);
  let classes;
  if (notification.status === "success") {
    classes = `success`;
  }
  if (notification.status === "failed") {
    classes = `failed`;
  }
  if (notification.status === "pending") {
    classes = `pending`;
  }

  return (
    <>
      <div className={`notification ${classes}`}>
        <div className="notification-title">
          <h3>{notification.title}</h3>
        </div>
        <div className="notification-description">
          <h3>{notification.message}</h3>
        </div>
      </div>
    </>
  );
}

export default Notification;
