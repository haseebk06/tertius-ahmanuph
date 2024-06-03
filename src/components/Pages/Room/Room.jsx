import "./style.css";
import room from "./img/room.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Room = () => {
  return (
    <main id="room">
      <Container fluid>
        <Row>
          <Col>
            <div className="room-img"></div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Room;
