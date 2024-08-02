import {
    Card,
    CardTitle,
    CardBody,
    CardText,
    Row,
  } from "reactstrap";
  import { Link } from "react-router-dom";


const SearchRow = ({site, index}) => {
    return (
        <Row key={index} style={{ margin: "3rem" }}>
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
              <Link to={site.websiteUri}>{site.websiteUri}</Link>
            </CardText>
          </CardBody>
        </Card>
      </Row>
    );
};

export default SearchRow;