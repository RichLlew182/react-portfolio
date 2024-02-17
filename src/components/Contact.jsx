import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {

  function submitForm(e) {
    e.preventDefault();
    console.log(e)

  }
  return (
    <>
      <section className="container py-5 px-0">
        <h2 className="mb-4 display-5 fw-bold">Contact</h2>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="tel" placeholder="+44 01234 567 890" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit" id="contactButton" onClick={submitForm}>
            Submit
          </Button>
        </Form>
      </section>
    </>
  );
}

export default Contact;