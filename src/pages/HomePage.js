import { Container } from "reactstrap";
import HomeSearchForm from "../features/home/HomeSearchForm";
import { useEffect } from "react";

const HomePage = () => {
  const style = "text-center";
  useEffect(() => {
    document.title = "Near Me App | Home";
  }, []);
  return (
    <Container className="mt-5" fluid>
      <div>
        <h1 className={style}>Find your next favorite place.</h1>
      </div>
      <HomeSearchForm />
      <div id="textIntro">
        <p className={style}>
          Search for any place under the sun in your neighborhood or around the
          world.
        </p>
      </div>
    </Container>
  );
};

export default HomePage;
