import { Container } from "reactstrap";
import { response } from "../data/response";
import SearchFilterForm from "../features/search/SearchFilterForm";
import SearchRow from "../features/search/SearchRow";

const SearchPage = () => {
  return (
    <Container fluid>
      <SearchFilterForm />
      {response.places.map((site, index) => {
        return <SearchRow key={index} site={site} />;
      })}
    </Container>
  );
};

export default SearchPage;
