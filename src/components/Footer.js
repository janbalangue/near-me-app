import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer mt-5">
      <Container className="mt-5">
        <Row className="mt-5">
          <Col className="mt-5">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
