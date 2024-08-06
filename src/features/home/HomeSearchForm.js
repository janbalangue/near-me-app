import { Col, FormGroup, Button, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const HomeSearchForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value:", e.target.search.value);
    navigate(`/search/${e.target.search.value}`);
  };
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <FormGroup className="mx-5">
        <Col className="searchCol">
          <Label htmlFor="search">
            <h5>Search</h5>
          </Label>
          <Input
            className="form-control"
            id="search"
            name="search"
            placeholder="Where do you want to go?"
            type="search"
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
  );
};

export default HomeSearchForm;
