import { Badge, Card, Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function ProjectCard({ title, image, description, deployedURL, altText, techOne, techTwo, techThree }) {
  return (
    <div>
      <Card className="h-100">
        <a href={deployedURL} target="_blank">
          <Card.Img variant="top" src={image} alt={altText} />
        </a>
        <Card.Body className="p-4">
          <Card.Title className="mb-3">{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button href={deployedURL} target="_blank" className="me-3 border-0" variant="primary">View Project</Button>
          <div className="technology mt-4">  <Badge bg="info">{techOne}</Badge>  <Badge bg="info">{techTwo}</Badge>  <Badge bg="info">{techThree}</Badge></div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;

