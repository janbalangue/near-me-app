import { Container, Input } from "reactstrap";
import SearchRow from "../features/search/SearchRow";
import { useState, useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { callPlacesBackend } from "../data/callPlacesBackend";
import NoResults from "../features/search/NoResults";
import { useSpring, animated } from "react-spring";

const SearchPage = () => {
  const { query } = useParams();
  const [toggle, setToggle] = useState(false);
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1, 1)" : "scale(1, 0)",
    config: { duration: 500 },
  });
  const [places, setPlaces] = useState([]);
  const storedPlacesRef = useRef(null);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    document.title = `Near Me App | Search: ${query}`;
  }, [query]);
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await callPlacesBackend(query);
        setPlaces(response);
        storedPlacesRef.current = response;
        setToggle(true);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchPlaces();
  }, [query]);
  const handleChange = (e) => {
    e.preventDefault();
    setFilterText(e.target.value);
    setPlaces(
      storedPlacesRef.current.filter((place) => {
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
  return (
    <Container fluid>
      <Input
        id="filter"
        name="filter"
        placeholder="Type here to filter"
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
