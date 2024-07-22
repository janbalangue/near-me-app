import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
} from "reactstrap";

const HomePage = () => {
  const [paragraphStyle, h1Style, rowStyle] = [
    "text-center mt-3",
    "text-center mt-5",
    "d-flex align-items-center justify-content-center",
  ];
  return (
    <Container className="mt-5" fluid>
      <h1 className={h1Style}>Find your favorite place to be.</h1>
      <p className={paragraphStyle}>
        Near Me App brings your neighborhood to you. Search for your next
        favorite pizzeria, coffee spot, nightclub, or anyplace else.
      </p>
      <p className={paragraphStyle}>
        You can even look in a different city. We've got you covered.
      </p>
      <Form className="mt-5" action="/search">
        <FormGroup className="mx-5">
          <Col className="mx-5">
            <Label for="search"><h5>Search</h5></Label>
            <Input
              id="search"
              name="search"
              placeholder="Where do you want to go?"
              type="textarea"
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
    </Container>
  );
};

export default HomePage;
