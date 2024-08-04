import { Col, FormGroup, Button, Label, Input } from "reactstrap";
import fetchPlaces from "../../data/fetchPlaces";

const HomeSearchForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("value:", e.target.search.value);
    console.log("in JSON format:", JSON.stringify(e.target.search.value));
    await fetchPlaces(e.target.search.value);
  }
  return (
      <form className="mt-5" onSubmit={handleSubmit}>
        <FormGroup className="mx-5">
          <Col className="mx-5">
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
