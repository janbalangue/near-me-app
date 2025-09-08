import { Container, Input } from "reactstrap";
import SearchRow from "../features/search/SearchRow";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import NoResults from "../features/search/NoResults";
import { useSpring, animated } from "react-spring";
import { response } from "../data/response";

const SearchPage = () => {
  const { query } = useParams();
  const [toggle, setToggle] = useState(false);
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1, 1)" : "scale(1, 0)",
    config: { duration: 500 },
  });
  const [places, setPlaces] = useState([]);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    document.title = `Near Me App | Search | ${query}`;
    setPlaces(response.places);
    setToggle(true);
  }, [query]);
  const handleChange = (e) => {
    e.preventDefault();
    setFilterText(e.target.value);
    setPlaces(
      response.places.filter((place) => {
        const [name, address, priceLevel] = [
          place.displayName.text.toLowerCase(),
          place.formattedAddress.toLowerCase(),
          place.priceLevel
            ? place.priceLevel.split("_").join(" ").toLowerCase()
            : "price level unavailable",
        ];
        return (
          name.includes(filterText.toLowerCase()) ||
          address.includes(filterText.toLowerCase()) ||
          priceLevel.includes(filterText.toLowerCase())
        );
      })
    );
  };
  console.log(places);
  return (
    <Container fluid>
      <Input
        id="filter"
        name="filter"
        placeholder="Search within results..."
        type="search"
        onChange={handleChange}
        autoFocus
      />
      {places[0] ? (
        places.map((place) => { 
          return (
            <animated.div key={uuid()} style={animatedStyle}>
              <SearchRow place={place} key={uuid()} />
            </animated.div>
          );
        }
      )) : (
        <NoResults />
      )}
    </Container>
  );
};

export default SearchPage;
