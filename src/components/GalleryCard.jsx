import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectList from '../project-list.json'

function GalleryCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={projectList[0].image} />
      <Card.Body>
        <Card.Title>{projectList[0].title}</Card.Title>
        <Card.Text>
          {projectList[0].description}
        </Card.Text>
        <Button href={projectList[0].deployedURL} target="_blank" variant="primary">View Project</Button>
        <Button href={projectList[0].repoLink} target="_blank" variant="primary">Repo Link</Button>
      </Card.Body>
    </Card>
  );
}

export default GalleryCard;