import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from './Jumbotron';

function Header() {
  return (
    <>
      <header>
        <Navbar sticky="top" collapseOnSelect expand="lg" className="py-3 bg-white">
          <Container className="px-4 px-sm-0">
            <Navbar.Brand href="./">RL.dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link className="me-lg-2" href="./">Home</Nav.Link>
                <Nav.Link className="me-lg-2" href="#project-gallery">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Jumbotron />
      </header>
    </>

  );
}

export default Header;