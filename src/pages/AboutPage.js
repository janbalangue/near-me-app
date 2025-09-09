import { Container } from 'reactstrap';
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Near Me App | About';
  }, []);
  return (
    <Container className="mt-5" fluid>
      <h1 className="mt-5 text-center">About This App</h1>
      <div id="aboutText" className="mt-5">
        <p className="text-center">
          This is a demo version of an app that would normally call the Places
          API in Google Maps.
        </p>
        <p className="text-center">
          It's built with React, Reactstrap, and React Spring.
        </p>
        <p className="text-center">
          Enabling the Places API in Google Maps would require billing
          information, which is not included in this demo.
        </p>
      </div>
    </Container>
  );
};

export default AboutPage;
