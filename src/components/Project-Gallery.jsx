import Project from "./Project";
import projectList from '../project-list.json'

function ProjectGallery() {
  return (
    <>
      <div className="container py-5">
        <h2 className="mb-4 display-5 fw-bold">Projects</h2>
        <div className="row">
          {
            projectList.map((project) => (
              <Project key={project.id} title={project.title} description={project.description} image={project.image} deployedURL={project.deployedURL} repoLink={project.repoLink} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default ProjectGallery;
