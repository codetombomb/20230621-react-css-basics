import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import styles from "./styles.module.css";

function TopNav({ creatureData }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://www.vhv.rs/dpng/d/448-4481087_the-legend-of-zelda-triforce-zelda-png-transparent.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          BOTW Creatures
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="All Creatures" className="dd-scroll">
            <div className={styles.dropdownScroll}>
              {creatureData.map((creature) => {
                return (
                  <NavDropdown.Item key={creature}>
                    {creature.name}
                  </NavDropdown.Item>
                );
              })}
            </div>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#home">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default TopNav;
