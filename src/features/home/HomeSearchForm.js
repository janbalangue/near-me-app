import { Container, Col, FormGroup, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SearchSchema = Yup.object().shape({
  search: Yup.string()
    .min(2, "Please enter at least 2 characters")
    .required("Required"),
});

const HomeSearchForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    navigate(`/search/${values.search}`);
  };
  return (
    <Container id="searchContainer" fluid>
      <Formik
        initialValues={{ search: "" }}
        validationSchema={SearchSchema}
        onSubmit={( values, {setSubmitting}) => {
          console.log("values", values);
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <Col>
                <Label htmlFor="search">Search</Label>
                <Field
                  className="form-control"
                  id="search"
                  name="search"
                  placeholder="Where to?"
                  type="search"
                  autoFocus
                />
                <ErrorMessage
                  name="search"
                  component="div"
                  className="error-message"
                />
              </Col>
            </FormGroup>
            <Container className="searchBtnContainer">
              {" "}
              <button
                type="submit"
                name="submit"
                className="searchBtn px-5"
                color="primary"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Container>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default HomeSearchForm;
