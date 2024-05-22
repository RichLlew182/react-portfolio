import ProjectCard from "../components/ProjectCard";
import projectList from "../../data/project-list.json"
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + 0.1 * index,
    }
  })
}

function ProjectGallery() {
  return (
    <>

      <section id="projects" className="primary-green">
        <div className="container py-5 px-4 px-sm-0">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-4 display-4 text-highlight">Projects</motion.h2>
          <div className="row">
            {
              projectList.map((project, index) => (
                <motion.div className='col-md-6 col-lg-4 my-3' key={project.id} variants={fadeInAnimationVariants} viewport={{ once: true }} whileInView={"animate"} initial={"initial"} custom={index}>
                  <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} altText={project.imageAltText} techOne={project.tech[0]} techTwo={project.tech[1]} techThree={project.tech[2]} deployedURL={project.deployedURL} repoLink={project.repoLink} />
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectGallery;
