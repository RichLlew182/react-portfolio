import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from './Jumbotron';

function Header() {
  return (
    <>
      <header>
        <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container className="px-0">
            <Navbar.Brand href="/">RL.dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#project-gallery">Projects</Nav.Link>
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