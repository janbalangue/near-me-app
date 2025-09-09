import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Row } from 'reactstrap';
import kermits404 from '../app/assets/img/kermits-404.jpg';
import { useLocation } from 'react-router-dom';

const PageNotFound = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'scale(1, 1)' : 'scale(1, 0)',
    config: { duration: 500 },
  });
  useEffect(() => {
    document.title = 'Near Me App | Page Not Found';
    setToggle(true);
  }, []);
  return (
    <>
      <h2 className="text-center mt-4 text-danger">
        Could not find {location.pathname}
      </h2>
      <animated.div style={animatedStyle}>
        <Row className="mt-4">
          <img id="kermits404" src={kermits404} alt="Page not found" />
        </Row>
      </animated.div>
    </>
  );
};

export default PageNotFound;
