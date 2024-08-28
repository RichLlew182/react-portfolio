import Row from "react-bootstrap/Row";
import Jumbotron from '../components/Jumbotron'
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import skillsList from '../../data/skills.json'
import learningList from '../../data/learning.json'

function Home() {

  const navigate = useNavigate()

  const handleProjectsClick = (e) => {
    e.preventDefault();
    navigate('/projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.6 + 0.08 * index,
      }
    })
  }



  return (
    <>
      <Jumbotron />
      <section className="container py-5 px-5 px-lg-0 mt-lg-4">

        <Row>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25 }} className="col-lg-12 col-xl-6 mb-5 mb-xl-0">
            <div className="mb-4 pe-lg-3">
              <h2 className="mb-4 display-5 text-highlight">About me</h2>
              <p>My name is Richard, and I&apos;m a skilled Front-End Developer and designer based in London. With a rich background spanning several years in the design industry, I am now eagerly seeking fresh challenges and exciting opportunities to leverage my expertise as a Front-End Developer.</p>
              <p>
                Whether you&apos;re a prospective collaborator, a fellow enthusiast in the tech community, or simply curious to learn more about my journey, I invite you to explore my work and discover the innovative solutions I bring to the table.
              </p>
            </div>
            <div className="btn-toolbar">
              <Link className="btn btn-primary me-3 border-0" onClick={handleProjectsClick} type="button">View Projects</Link><Link className="btn btn-secondary border-0 me-3" onClick={handleContactClick} type="button">Get in Touch</Link>
            </div>
          </motion.div>

          <div id="skills" className="col-lg-12 col-xl-6">
            <div className="">
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="mb-4 display-5 text-highlight">My skills so far</motion.h2>

              <ul className="list-group list-group-horizontal d-flex flex-wrap gap-3 pt-1">{
                skillsList.map((skill, index) => (
                  <motion.li className='list-group-item d-flex py-2 align-items-center rounded' key={skill.id} variants={fadeInAnimationVariants} initial={"initial"} animate={"animate"} custom={index}>
                    <img className="skill-icon" src={skill.icon} alt={skill.alt} height="20" width="25"></img>
                    {skill.title}
                  </motion.li>
                ))
              }

              </ul>
            </div>

            <div id="learning"className="mt-4">
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="mb-4 display-5 text-highlight">In progress...</motion.h2>

              <ul className="list-group list-group-horizontal d-flex flex-wrap gap-3 pt-1">{
                learningList.map((skill, index) => (
                  <motion.li className='list-group-item d-flex py-2 align-items-center rounded' key={skill.id} variants={fadeInAnimationVariants} initial={"initial"} animate={"animate"} custom={index}>
                    <img className="skill-icon" src={skill.icon} alt={skill.alt} height="20" width="25"></img>
                    {skill.title}
                  </motion.li>
                ))
              }

              </ul>
            </div>
          </div>


        </Row>

      </section >

    </>
  );
}

export default Home;
