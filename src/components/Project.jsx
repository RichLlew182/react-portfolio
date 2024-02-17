import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
function Project({ title, image, description, deployedURL, repoLink }) {
  return (
    <div className='col-md-6 col-lg-4'>
      <Card>
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
    </div>
  );
}

export default Project;

