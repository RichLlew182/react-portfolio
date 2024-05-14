import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" className="py-3 bg-white">
          <Container className="px-4 px-sm-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }}><Navbar.Brand as={Link} to="/">richllew.dev</Navbar.Brand></motion.div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}><Nav.Link as={Link} className="me-lg-2" to="/">Home</Nav.Link></motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1 }}><Nav.Link as={Link} className="me-lg-2" to="/projects">Projects</Nav.Link></motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}><Nav.Link as={Link} to="/contact">Contact</Nav.Link></motion.div>
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