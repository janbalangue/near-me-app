import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const SearchRow = ({ place }) => {
  const { displayName, formattedAddress, priceLevel, websiteUri } = place;
  return (
    <Card className="searchRow">
      <CardTitle className="m-3">
        <strong>{displayName.text}</strong>
      </CardTitle>
      <CardBody>
        <CardText>
          {formattedAddress}
          <br />
          {priceLevel
            ? priceLevel.split("_").join(" ").toLowerCase()
            : "price level unavailable"}
        </CardText>
        <Link to={websiteUri}>
          <i className="fa fa-globe" aria-hidden="true"></i>
          Go to website
        </Link>
      </CardBody>
    </Card>
  );
};

export default SearchRow;
