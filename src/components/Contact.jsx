import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Contact() {

  const contactForm = document.querySelector('#contact-form');
  const thankYouMessage = document.querySelector('#thankYouMessage');
  const displayNone = { display: 'none' }
  const displayBlock = { display: 'block' }


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

    event.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Looks like you missed a field')
    }

    else {

      thankYouMessage.style = { displayBlock }
      contactForm.style.display = 'none';
    }

    // setFormData({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   message: ''
    // });

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
        <div id="thankYouMessage" style={displayNone}><h3>Thanks for reaching out {formData.name}! I'll be in touch to discuss your project within 24 hours.</h3></div>

      </section>
    </>
  );
}

export default Contact;