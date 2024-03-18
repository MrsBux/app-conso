import { Nav } from "react-bootstrap";
import SearchBox from "./SearchBox";
import "../../style/css/tabtools.css";

function TabTools() {
  return (
    <div className="tabtools">
      <SearchBox />

      <>
        <Nav className="tabtools__nav" activeKey="/home">
          <Nav.Item className="tabtools__nav__item">
            <Nav.Link href="/home" className="tabtools__nav__item__link">
              Active
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tabtools__nav__item">
            <Nav.Link eventKey="link-1" className="tabtools__nav__item__link">
              Link
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tabtools__nav__item">
            <Nav.Link eventKey="link-2" className="tabtools__nav__item__link">
              Link
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tabtools__nav__item">
            <Nav.Link eventKey="disabled" className="tabtools__nav__item__link">
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    </div>
  );
}

export default TabTools;
