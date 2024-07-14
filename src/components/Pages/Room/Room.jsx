import "./style.css";
import room from "./img/room.jpg";

const Room = () => {
  return (
    <main id="room">
      <div className="room-img">
        <img src={room} alt="image" />
      </div>
    </main>
  );
};

export default Room;
