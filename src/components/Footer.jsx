import { motion } from "framer-motion";

function Footer() {
  return (
    <>

      <footer className="container px-4 px-sm-0 d-flex flex-column flex-sm-row flex-wrap justify-content-center justify-content-sm-between align-items-center py-3 my-4 mt-5 border-top">
        <div className="col-md-6 d-flex align-items-center">



          <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} viewport={{ once: true }}> <span className="mb-3 mb-sm-0">© 2024 Richard Llewellyn</span></motion.div>
        </div>

        <ul className="nav col-md-6 justify-content-end list-unstyled d-flex">

          <motion.li initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} viewport={{ once: true }} className="ms-3"><a className="text-decoration-none text-highlight" target="_blank" href="https://github.com/RichLlew182"><i
            className="fa-brands fa-github me-2"></i>Github</a></motion.li>
          <motion.li initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} viewport={{ once: true }} className="ms-3"><a className="text-decoration-none text-highlight" target="_blank" href="https://www.linkedin.com/in/richard-lee-llewellyn"><i
            className="fa-brands fa-linkedin  me-2"></i>Linkedin</a></motion.li>

          <motion.li initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: .4 }} viewport={{ once: true }} className="ms-3"><a className="text-decoration-none text-highlight" target="_blank" href="./assets/files/richard-llewellyn-cv.pdf"><i className="fa-solid fa-file-lines me-2"></i>CV</a></motion.li>


        </ul>
      </footer >

    </>
  );
}

export default Footer;
