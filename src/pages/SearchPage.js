import { Container, Input } from "reactstrap";
import SearchRow from "../features/search/SearchRow";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import { response } from "../data/response";

const SearchPage = () => {
  const [filterText, setFilterText] = useState("");
  const [searchRows, setSearchRows] = useState(response.places);
  useEffect(() => {
    document.title = "Near Me App | Search";
  }, []);
  useEffect(() => {
    setSearchRows(
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
  }, [filterText]);
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
        className="border"
        onChange={handleChange}
      />
      {searchRows.map((place) => {
        return <SearchRow key={uuid()} place={place} />;
      })}
      <h3 className="mt-5 text-center">No results found</h3>
    </Container>
  );
};

export default SearchPage;
