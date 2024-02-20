import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
function Project({ title, image, description, deployedURL, repoLink }) {
  return (
    <div className='col-md-6 col-lg-4 my-3'>
      <Card className="h-100">
        <Card.Img variant="top" src={image} />
        <Card.Body className="p-4">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button href={deployedURL} target="_blank" className="me-3" variant="primary">View Project</Button>
          <Button href={repoLink} target="_blank" variant="secondary">Repo Link</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;

