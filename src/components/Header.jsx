import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Header() {

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.querySelector('body').setAttribute('data-bs-theme', 'dark');
    } else {
      document.querySelector('body').setAttribute('data-bs-theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" className="py-3 bg-body">
          <Container className="px-5 px-lg-0 mx-sm-auto">

            <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }} viewport={{ once: true }}><Navbar.Brand as={Link} to="/">richllew.dev</Navbar.Brand></motion.div>

            <motion.div id="mobile-dark-toggle" className="d-block d-lg-none me-5 me-lg-0" initial={{ opacity: 0, y: -40 }} onClick={handleDarkMode} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} viewport={{ once: true }}><Nav.Link>{darkMode ? <i className="fa-solid fa-sun text-highlight"></i> : <i className="fa-solid fa-moon text-primary"></i>}</Nav.Link></motion.div>

            <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} viewport={{ once: true }}><Navbar.Toggle aria-controls="responsive-navbar-nav" /></motion.div>

            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav className="gap-2">
                <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} viewport={{ once: true }}><Nav.Link as={Link} className="me-lg-2 text-center" to="/">Home</Nav.Link></motion.div>
                <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} viewport={{ once: true }}><Nav.Link as={Link} className="me-lg-2 text-center" to="/projects">Projects</Nav.Link></motion.div>
                <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} viewport={{ once: true }}><Nav.Link as={Link}
                  className="text-center" to="/contact">Contact</Nav.Link></motion.div>
                <motion.div className="d-none d-lg-block" initial={{ opacity: 0, y: -40 }} onClick={handleDarkMode} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} viewport={{ once: true }}><Nav.Link>{darkMode ? <i className="fa-solid fa-sun text-highlight"></i> : <i className="fa-solid fa-moon text-primary"></i>}</Nav.Link></motion.div>
              </Nav>
            </Navbar.Collapse>

          </Container>

        </Navbar>
      </header>
    </>

  );
}

export default Header;