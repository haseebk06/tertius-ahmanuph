import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <Container fluid>
          <Row>
            <Col>
              <p className="text-base">Subscribe</p>
              <p className="text-xs">
                Receive email updates about launches, new product info,
                exclusive access, and more.
              </p>
              <form className="d-flex w-full text-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  className="outline-none text-xs email border-black border"
                />
                <button className="bg-black text-white btn-submit h-10 ms-2">
                  Submit
                </button>
              </form>
            </Col>

            <Col>
              <ul className="text-end sites">
                <li>
                  <NavLink to={"#"}>Terms & Conditions</NavLink>
                </li>
                <li>
                  <NavLink to={"#"}>Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to={"#"}>FAQs</NavLink>
                </li>
              </ul>
            </Col>

            <Col>
              <ul className="text-end social">
                <li>
                  <NavLink to={"#"}>Instagram</NavLink>
                </li>
                <li>
                  <NavLink to={"#"}>Facebook</NavLink>
                </li>
                <li>
                  <NavLink to={"#"}>Twitter</NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
