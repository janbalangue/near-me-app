import { Container, Input } from "reactstrap";
import SearchRow from "../features/search/SearchRow";
import { useState, useEffect } from "react";
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
  const [placeList, setPlaceList] = useState([]);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    document.title = `Near Me App | Search: ${query}`;
  }, [query]);
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await callPlacesBackend(query);
        setPlaceList(
          response.filter((place) => {
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
        setToggle(true);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchPlaces();
  }, [filterText, query]);
  const handleChange = (e) => {
    e.preventDefault();
    setFilterText(e.target.value);
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
      {placeList[0] ? (
        placeList.map((place) => { 
          return (
            <animated.div style={animatedStyle}>
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
