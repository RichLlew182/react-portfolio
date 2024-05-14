import { motion } from "framer-motion";

function Footer() {
  return (
    <>

      <footer className="container px-4 px-sm-0 d-flex flex-wrap justify-content-center justify-content-sm-between align-items-center py-3 my-4 mt-5 border-top">
        <div className="col-sm-6 d-flex align-items-center">



          <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}> <span className="mb-3 mb-sm-0">© 2024 Richard Llewellyn</span></motion.div>
        </div>

        <ul className="nav col-sm-6 justify-content-end list-unstyled d-flex">
          <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>
            <li className="ms-3"><a className="text-decoration-none" target="_blank" href="https://github.com/RichLlew182"><i
              className="fa-brands fa-github me-2"></i>Github</a></li>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}>
            <li className="ms-3"><a className="text-decoration-none" target="_blank" href="https://www.linkedin.com/in/richard-llewellyn-9073862b/"><i
              className="fa-brands fa-linkedin  me-2"></i>Linkedin</a></li>
          </motion.div >
          <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .4 }}>  <li className="ms-3"><a className="text-decoration-none" target="_blank" href="./assets/files/richard-llewellyn-cv.pdf"><i className="fa-solid fa-file-lines me-2"></i>Resume</a></li></motion.div>

        </ul>
      </footer >

    </>
  );
}

export default Footer;
