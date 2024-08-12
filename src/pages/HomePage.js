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
        <br />
        <p className={style}>
          Near Me App brings your neighborhood and the world to you. Search for local
          pizzerias, personal trainers, grocery stores, or anything else.
        </p>
        <p className={style}>
          You can also enter a city and take your search anywhere in the world.
        </p>
      </div>
    </Container>
  );
};

export default HomePage;
