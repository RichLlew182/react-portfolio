import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <>
      <div className="container">
        <h1>Contact</h1>
        <Form>
          <Form.Group className="mb-3" controlId="nameInput">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailInput">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phoneInput">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="email" placeholder="+44 01234 567 890" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit" id="contactButton">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Contact;