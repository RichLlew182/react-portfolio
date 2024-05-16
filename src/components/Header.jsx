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
            <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }} viewport={{ once: true }}><Navbar.Brand as={Link} to="/">richllew.dev</Navbar.Brand></motion.div>
            <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} viewport={{ once: true }}><Navbar.Toggle aria-controls="responsive-navbar-nav" /></motion.div>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} viewport={{ once: true }}><Nav.Link as={Link} className="me-lg-2" to="/">Home</Nav.Link></motion.div>
                <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} viewport={{ once: true }}><Nav.Link as={Link} className="me-lg-2" to="/projects">Projects</Nav.Link></motion.div>
                <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} viewport={{ once: true }}><Nav.Link as={Link} to="/contact">Contact</Nav.Link></motion.div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>

  );
}

export default Header;