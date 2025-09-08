import { Container, Card, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const SearchRow = ({ place }) => {
  const { displayName, formattedAddress, priceLevel, websiteUri } = place;
  return (
    <Container fluid>
      <Card className="searchRow">
        <CardTitle className="m-3">
          <strong>{displayName.text}</strong>
        </CardTitle>
        <CardBody>
          <CardText>
            {formattedAddress}
            <br />
            {priceLevel ? "Cost: " + priceLevel.split("_")[2].toLowerCase() : ""}
          </CardText>
          {websiteUri ? (
            <Link to={websiteUri}>
              <i className="fa fa-globe" aria-hidden="true"></i>
              Go to website
            </Link>
          ) : null}
        </CardBody>
      </Card>
    </Container>
  );
};

export default SearchRow;
