import { Container } from "reactstrap";
import HomeSearchForm from "../features/home/HomeSearchForm";
import { useEffect } from "react";

const HomePage = () => {
  const [paragraphStyle, h1Style] = ["text-center", "text-center mt-5"];
  useEffect(() => {
    document.title = "Near Me App | Home";
  }, []);
  return (
    <Container className="mt-5" fluid>
      <div id="textIntro">
        <h1 className={h1Style}>Find your next favorite place.</h1>
        <p className={paragraphStyle}>
          Near Me App brings your neighborhood to you. Search for your next
          favorite pizzeria, coffee spot, nightclub, movie theater, or anyplace
          else.
        </p>
        <p className={paragraphStyle}>
          Try looking for a personal trainer, family doctor, or an oil change
          here too.
        </p>
        <p className={paragraphStyle}>
          You can even search in another city, anywhere in the world. We've got
          you covered.
        </p>
      </div>
      <HomeSearchForm />
    </Container>
  );
};

export default HomePage;
