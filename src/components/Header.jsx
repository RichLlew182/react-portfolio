import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <Navbar sticky="top" collapseOnSelect expand="lg" className="py-3 bg-white">
          <Container className="px-4 px-sm-0">
            <Navbar.Brand as={Link} to="/">richllew.dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link as={Link} className="me-lg-2" to="/">Home</Nav.Link>
                <Nav.Link as={Link} className="me-lg-2" to="/project-gallery">Projects</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <Jumbotron /> */}
      </header>
    </>

  );
}

export default Header;