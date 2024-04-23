// import SearchBox from "./SearchBox";
import "../../style/css/tabtools.css";
import { Navbar, Nav } from "react-bootstrap";

function TabTools({ sectionsPage }) {
  return (
    <div className="tabtools">
      {/* <SearchBox /> */}

      <nav className="tabtools__nav">
        {sectionsPage.map((section, index) => (
          <a
            key={index}
            href={`#${section.page}`}
            className="tabtools__nav__link"
          >
            {section.item}
          </a>
        ))}
      </nav>
      <div className="tabtools__mobile">
        <Navbar
          expand="lg"
          className="tabtools"
          id="togglerplus"
          style={{ color: "#ffd2b8" }}
        >
          <Navbar.Toggle id="toggler" style={{ color: "#ffd2b8" }} />
          <Navbar.Collapse id="navbarmobile" style={{ color: "#ffd2b8" }}>
            <Nav id="navbarmobileplus">
              {sectionsPage.map((section, index) => (
                <Nav.Link
                  key={index}
                  href={`#${section.page}`}
                  style={{ color: "#ffd2b8" }}
                >
                  {section.item}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default TabTools;
