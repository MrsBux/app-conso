import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../style/css/searchbox.css";
import loupe from "../../assets/logo_loupe.webp";

function SearchBox() {
  return (
    <Form className="searchbox">
      <Row className="searchbox__row">
        <Col className="searchbox__row__col" xs="auto">
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2 searchbox__row__col__box"
            id="bar"
          />
        </Col>
        <Col className="searchbox__row__col" xs="auto" id="loup">
          <button type="submit" className="searchbox__row__col__btn" id="loupe">
            <img
              src={loupe}
              alt="loupe de recherche"
              className="searchbox__row__col__btn__img"
            ></img>
          </button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBox;
