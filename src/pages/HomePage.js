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
      <div id="textIntro">
        <h1 className={style}>Find your next favorite place.</h1>
        <br />
        <p className={style}>
          Near Me App brings your neighborhood to you. Search for your next
          favorite pizzeria, coffee spot, nightclub, movie theater, or anyplace
          else.
        </p>
        <p className={style}>
          Try looking for a personal trainer, family doctor, or an oil change
          here too.
        </p>
        <p className={style}>
          You can even search in another city, anywhere in the world. We've got
          you covered.
        </p>
      </div>
      <HomeSearchForm />
    </Container>
  );
};

export default HomePage;
