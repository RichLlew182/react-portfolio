import Project from "./Project";
import projectList from '../project-list.json'

function ProjectGallery() {
  return (
    <>
      <section className="container py-5 px-4 px-sm-0 mt-lg-4">
        <h2 className="mb-4 display-5">Projects</h2>
        <div className="row">
          {

            // map function that iterates over the objects in the project-list JSON file and passes in the props to the Project component
            projectList.map((project) => (
              <Project key={project.id} title={project.title} description={project.description} image={project.image} deployedURL={project.deployedURL} repoLink={project.repoLink} />
            ))
          }
        </div>
      </section>
    </>
  );
}

export default ProjectGallery;
