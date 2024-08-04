import { Col, FormGroup, Button, Label } from "reactstrap";
import { Formik, Form, Field } from "formik";

const HomeSearchForm = () => {
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
      </Form>
    </Formik>
  );
};

export default HomeSearchForm;
