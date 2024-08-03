import { Container } from "reactstrap";
import { response } from "../data/response";
import SearchFilterForm from "../features/search/SearchFilterForm";
import SearchRow from "../features/search/SearchRow";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

const SearchPage = () => {
  useEffect(() => {
    document.title = "Near Me App | Search";
  });
  return (
    <Container fluid>
      <SearchFilterForm />
      {response.places.map((site) => {
        return <SearchRow key={uuid()} site={site} />;
      })}
    </Container>
  );
};

export default SearchPage;
