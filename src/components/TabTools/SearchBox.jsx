import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../style/css/searchbox.css";
import loupe from "../../assets/logo_loupe.webp";

function SearchBox() {
  return (
    <Form inline className="searchbox">
      <Row className="searchbox__row">
        <Col className="searchbox__row__col" xs="auto">
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2 searchbox__row__col__box"
          />
        </Col>
        <Col className="searchbox__row__col" xs="auto">
          <Button type="submit" className="searchbox__row__col__btn">
            <img
              src={loupe}
              alt="loupe de recherche"
              className="searchbox__row__col__btn__img"
            ></img>
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBox;
