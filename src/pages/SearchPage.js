import {
  Container,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { response } from "../data/response";
import SearchFilterForm from "../features/search/SearchFilterForm";
import SearchRow from "../features/search/SearchRow";

const SearchPage = () => {
  return (
    <Container fluid>
      <SearchFilterForm />
      {response.places.map((site, index) => {
        return (
          <SearchRow site={site} index={index} />
        );
      })}
    </Container>
  );
};

export default SearchPage;
