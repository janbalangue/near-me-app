import { Container } from "reactstrap";
import { response } from "../data/response";
import SearchFilterForm from "../features/search/SearchFilterForm";
import SearchRow from "../features/search/SearchRow";
import { v4 as uuid } from "uuid";

const SearchPage = () => {
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
