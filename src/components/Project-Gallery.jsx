import Project from "./Project";
import projectList from '../project-list.json'
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
      delay: 0.1 * index,
    }
  })
}

function ProjectGallery() {
  return (
    <>

      <section id="projects" className="primary-green">
        <div className="container py-5 px-4 px-sm-0">
          <h2 className="mb-4 display-5">Projects</h2>
          <div className="row">
            {

              // map function that iterates over the objects in the project-list JSON file and passes in the props to the Project component
              projectList.map((project, index) => (
                <motion.div className='col-md-6 col-lg-4 my-3' key={project.id} variants={fadeInAnimationVariants} viewport={{ once: true }} whileInView={"animate"} initial={"initial"} custom={index}>
                  <Project key={project.id} title={project.title} description={project.description} image={project.image} deployedURL={project.deployedURL} repoLink={project.repoLink} />
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
