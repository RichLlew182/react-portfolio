import GalleryCard from "./GalleryCard";
import projectList from '../project-list.json'

function Projects() {
  return (
    <>
      <div className="container">
        <h1>Projects</h1>
        <div className="row">
          {
            projectList.map((project) => (
              <GalleryCard key={project.id} title={project.title} description={project.description} image={project.image} deployedURL={project.deployedURL} repoLink={project.repoLink} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Projects;
