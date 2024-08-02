import { Row, Col, FormGroup, Button, Label } from "reactstrap";
import { Formik, Form, Field } from "formik";

const HomeSearchForm = () => {
  const rowStyle = "d-flex align-items-center justify-content-center";
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };
  return (
    <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
      <Form className="mt-5">
        <FormGroup className="mx-5">
          <Col className="mx-5">
            <Label htmlFor="search">
              <h5>Search</h5>
            </Label>
            <Field
              className="form-control"
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
    </Formik>
  );
};

export default HomeSearchForm;
