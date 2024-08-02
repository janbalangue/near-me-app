import { Container } from "reactstrap";
import HomeSearchForm from "../features/home/HomeSearchForm";

const HomePage = () => {
  const [paragraphStyle, h1Style] = ["text-center mt-3", "text-center mt-5"];
  return (
    <Container className="mt-5" fluid>
      <h1 className={h1Style}>Find your next favorite place.</h1>
      <p className={paragraphStyle}>
        Near Me App brings your neighborhood to you. Search for your next
        favorite pizzeria, coffee spot, nightclub, or anyplace else.
      </p>
      <p className={paragraphStyle}>
        You can even look in a different city. We've got you covered.
      </p>
      <HomeSearchForm />
    </Container>
  );
};

export default HomePage;
