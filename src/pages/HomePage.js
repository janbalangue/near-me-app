import { Container } from "reactstrap";
import HomeSearchForm from "../features/home/HomeSearchForm";
import { useEffect } from "react";

const HomePage = () => {
  console.log(process.env.IPIFY_API_URL);
  const [paragraphStyle, h1Style] = ["text-center mt-3", "text-center mt-5"];
  useEffect(() => {
    document.title = "Near Me App | Home";
  }, []);
  return (
    <Container className="mt-5" fluid>
      <h1 className={h1Style}>Find your next favorite place.</h1>
      <p className={paragraphStyle}>
        Near Me App brings your neighborhood to you. Search for your next
        favorite pizzeria, coffee spot, nightclub, movie theater, or anyplace else.
      </p>
      <p className={paragraphStyle}>
        We've got you covered.
      </p>
      <HomeSearchForm />
    </Container>
  );
};

export default HomePage;
