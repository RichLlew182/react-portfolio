import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Contact() {

  // Setting initial state to an object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `formData.firstName` and `formData.lastName`, clearing the inputs
    alert(`Hello ${formData.name} ${formData.email} ${formData.phone} ${formData.message}`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });



  };


  return (
    <>
      <section className="container py-5 px-0">
        <h2 className="mb-4 display-5 fw-bold">Contact</h2>
        <Form id="contact-form">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="tel" name="phone" placeholder="+44 01234 567 890" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={3} onChange={handleInputChange} />
          </Form.Group>
          <Button variant="primary" type="submit" id="contactButton" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </section>
    </>
  );
}

export default Contact;