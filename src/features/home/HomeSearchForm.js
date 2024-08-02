import { Row, Col, Form, FormGroup, Input, Button, Label } from "reactstrap";

const HomeSearchForm = () => {
  const rowStyle = "d-flex align-items-center justify-content-center";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.search.value);
  } 
  return (
    <Form className="mt-5" action="/search" onSubmit={handleSubmit}>
      <FormGroup className="mx-5">
        <Col className="mx-5">
          <Label for="search">
            <h5>Search</h5>
          </Label>
          <Input
            id="search"
            name="search"
            placeholder="Where do you want to go?"
            type="text"
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Row className={rowStyle}>
          <Col xs="auto">
            <Button className="px-5" color="secondary" size="lg">
              Clear
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              type="submit"
              name="submit"
              className="px-5"
              color="primary"
              size="lg"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default HomeSearchForm;
