import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const SearchRow = ({ place, index }) => {
  return (
    <Card key={index} className="searchRow">
      <CardTitle className="m-3">
        <strong>{place.displayName.text}</strong>
      </CardTitle>
      <CardBody>
        <CardText>
          {place.formattedAddress}
          <br />
          {place.priceLevel
            ? place.priceLevel.split("_").join(" ").toLowerCase()
            : "price level unavailable"}
        </CardText>
        <Link to={place.websiteUri}>
          <i className="fa fa-globe" aria-hidden="true"></i>
          Go to website
        </Link>
      </CardBody>
    </Card>
  );
};

export default SearchRow;
