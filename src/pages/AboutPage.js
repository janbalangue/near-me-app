import { Container } from "reactstrap";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Near Me App | About";
  }, []);
  return (
    <Container className="mt-5" fluid>
      <h1 className="mt-5 text-center">About This App</h1>
      <div className="mt-5">
        <p className="mx-5 text-center">
        This is a React portfolio project created at NuCamp. It provides
        points of interest from the Google Maps JavaScript API.
        </p>
        <p className="mx-5 text-center">
        Under the hood, it uses geolocation based on your router's IP address.
        </p>
      </div>
    </Container>
  );
};

export default AboutPage;
