import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GalleryCard({ title, image, description, deployedURL, repoLink }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button href={deployedURL} target="_blank" variant="primary">View Project</Button>
        <Button href={repoLink} target="_blank" variant="primary">Repo Link</Button>
      </Card.Body>
    </Card>
  );
}

export default GalleryCard;

