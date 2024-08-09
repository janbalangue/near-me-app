import { Container, Col, FormGroup, Button, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const HomeSearchForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${e.target.search.value}`);
  };
  return (
    <Container id="searchContainer" fluid>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Col>
            <Label htmlFor="search">Search</Label>
            <Input
              className="form-control"
              id="search"
              name="search"
              placeholder="Where to?"
              type="search"
              autoFocus
            />
          </Col>
        </FormGroup>
        <div className="searchBtn">
          {" "}
          <Button
            type="submit"
            name="submit"
            className="searchBtn px-5"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default HomeSearchForm;
