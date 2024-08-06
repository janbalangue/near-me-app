import { Card, CardTitle, CardBody, CardText, Row } from "reactstrap";
import { Link } from "react-router-dom";

const SearchRow = ({ place, index }) => {
  return (
    <Row key={index} style={{ margin: "3rem" }}>
      <Card className="place-card">
        <CardTitle className="m-3">
          <h4>{place.displayName.text}</h4>
        </CardTitle>
        <CardBody>
          <CardText>{place.formattedAddress}</CardText>
          <CardText>
            {place.priceLevel
              ? place.priceLevel.split("_").join(" ").toLowerCase()
              : "price level unavailable"}
            <br />
            <br />
            <Link to={place.websiteUri}>
              <i className="fa fa-globe" aria-hidden="true"></i>
              Go to website
            </Link>
          </CardText>
        </CardBody>
      </Card>
    </Row>
  );
};

export default SearchRow;
