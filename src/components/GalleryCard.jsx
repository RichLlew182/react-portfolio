import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GalleryCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button href={props.deployedURL} target="_blank" variant="primary">View Project</Button>
        <Button href={props.repoLink} target="_blank" variant="primary">Repo Link</Button>
      </Card.Body>
    </Card>
  );
}

export default GalleryCard;

