import { motion } from 'framer-motion'

const firstTextVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: .75, // Delay before animation starts
    },
  },
};

const secondTextVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1, // Delay before animation starts (more delayed than the first span)
    },
  },
};

function Jumbotron() {
  return (
    <>
      <section id="intro">
        <div className="container py-0 py-sm-5 px-5 px-lg-0">
          <div className="row gx-5 d-flex flex-wrap align-items-center flex-column-reverse flex-lg-row">
            <div className="col-md-12 col-lg-6 col-xl-8 py-5  d-flex justify-content-start">
              <h1 className="display-4"><motion.span initial="hidden" animate="visible" variants={firstTextVariant} custom={0} className="d-block text-highlight">Hi, I&apos;m Richard Llewellyn. </motion.span><motion.span initial="hidden" animate="visible" variants={secondTextVariant} custom={1} className="d-block text-highlight">A Front-End Developer and Designer.</motion.span></h1>

            </div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="col-md-12 col-lg-6 col-xl-4 pb-0 pt-5 py-md-4 d-flex justify-content-center">
              <img id="profile-picture" src="./assets/images/profile-picture.jpeg" className="img-fluid rounded-circle" alt="Profile Picture"></img>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jumbotron;
