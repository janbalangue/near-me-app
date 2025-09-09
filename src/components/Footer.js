import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container fluid className="">
        <Row>
          <Col id="footer-links">
            <h5 style={{ display: 'inline' }} className="mr-5">
              Links:
            </h5>
            <ul className="list-unstyled" style={{ display: 'inline' }}>
              <li className="m-3" style={{ display: 'inline' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li style={{ display: 'inline' }}>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  About
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
