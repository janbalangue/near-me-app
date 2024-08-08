import { Container, Input } from "reactstrap";
import SearchRow from "../features/search/SearchRow";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { callPlacesBackend } from "../data/callPlacesBackend";

const SearchPage = () => {
  const { query } = useParams();
  const [placeList, setPlaceList] = useState([]);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    document.title = "Near Me App | Search";
  }, []);
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
        placeholder="Type here to filter the places below"
        type="search"
        onChange={handleChange}
      />
      {placeList.map((place) => (
        <SearchRow place={place} key={uuid()} />
      ))}
    </Container>
  );
};

export default SearchPage;
