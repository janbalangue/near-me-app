import {
  Container,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Col,
  Row,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { response } from "../data/response";

const SearchPage = () => {
  const [locations, setLocations] = useState(response.places);
  function removeCard(index) {
    setLocations(locations.filter((location) => location.index !== index));
  }
  return (
    <Container fluid>
      <Form className="mt-3 px-5">
        <FormGroup inline>
          <Input
            id="filter"
            name="filter"
            placeholder="Enter a search term to filter this list"
            type="textarea"
            className="border"
          />
          <Button color="primary" className="mt-2 px-5">Filter</Button>
        </FormGroup>
      </Form>
      {response.places.map((site, index) => {
        return (
          <Row key={index} style={{ minWidth: "100%", margin: ".2rem" }}>
            <Card className="site-card">
              <CardTitle className="m-3">
                <Button
                  className="pull-right"
                  color="danger"
                  onClick={() => removeCard(index)}
                >
                  X
                </Button>
                <h4>{site.displayName.text}</h4>
              </CardTitle>
              <CardBody>
                <CardText>{site.formattedAddress}</CardText>
                <CardText>
                  {site.priceLevel
                    ? site.priceLevel.split("_").join(" ").toLowerCase()
                    : ""}
                  <hr />
                  <Link to={site.websiteUri}>{site.websiteUri}</Link>
                </CardText>
              </CardBody>
            </Card>
          </Row>
        );
      })}
    </Container>
  );
};

export default SearchPage;
