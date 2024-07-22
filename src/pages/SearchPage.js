import {
  Container,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { response } from "../data/response";

const SearchPage = () => {
  return (
    <Container fluid>
      <Row className="m-5">
        {response.places.map((site) => {
          return (
            <Col>
              <Card className="site-card">
                <CardTitle className="m-3">
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
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SearchPage;
