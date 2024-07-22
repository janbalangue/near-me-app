import { Row, Col, Form, FormGroup, Input, Button } from "reactstrap";

const HomePage = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center mt-5">Find your favorite hangout here.</h1>
      <p className="text-center mt-2">
        Try searching for local restaurants, gas stations, grocery stores, gyms,
        or hangouts. We've got you covered.
      </p>

      <Form className="mt-5">
        <FormGroup className="mx-5">
          <Col className="mx-5">
            <Input
              id="search"
              name="search"
              placeholder="Where do you want to go?"
              type="textarea"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Row className="d-flex align-items-center justify-content-center">
            {/* <Col xs="auto">
              <Button className="px-5" color="secondary" size="lg" onClick={() => clearSearch()}>
                Clear
              </Button>
            </Col> */}
            <Col xs="auto">
              <Button className="px-5" color="primary" size="lg">
                Submit
              </Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </div>
  );
};


export default HomePage;
