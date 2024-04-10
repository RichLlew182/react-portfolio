import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
function Project({ title, image, description, deployedURL, repoLink }) {
  return (
    <div className='col-md-6 col-lg-4 my-3'>
      <Card className="h-100">
        <a href={deployedURL}>
          <Card.Img variant="top" src={image} />
        </a>
        <Card.Body className="p-4">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button href={deployedURL} target="_blank" className="me-3 border-0" variant="primary">View Project</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;

