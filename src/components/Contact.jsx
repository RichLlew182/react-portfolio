import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Contact() {

  const contactForm = document.querySelector('#contact-form');
  const thankYouMessage = document.querySelector('#thankYouMessage');
  const displayNone = { display: 'none' }
  const displayBlock = { display: 'block' }

  const [validated, setValidated] = useState(false);

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

    const form = event.currentTarget;

    // checks if input fields have passed validation
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // displays thank you message if all fields have been validated and hides form
      thankYouMessage.style = { displayBlock }
      contactForm.style.display = 'none';
    }

    // Updating the forms validated state to be true
    setValidated(true);

  }

  return (
    <>
      <section className="container py-5 px-4 px-sm-0 mt-lg-4">
        <Row>
          <div className="col-lg-12 col-xl-4 mb-5 mb-xl-0">
            <h2 className="mb-2 display-5">Contact</h2>

            <p className="mb-4">
              Need to get in touch? No problem! Feel free to reach out to me via email or phone, whichever floats your boat. Alternatively, you can drop me a line using the adjacent form. Looking forward to hearing from you!</p>

            <div className="btn-toolbar">
              <a className="btn btn-primary me-3 border-0" href="mailto:richard.lee.llewellyn@gmail.com" type="button"><i className="fa-solid fa-envelope me-3 border-0"></i>Email Me</a><a href="https://wa.me/07538820382" className="btn btn-secondary me-2 border-0" type="button" target="_blank"><i className="fa-brands fa-whatsapp me-2"></i>WhatsApp Me!</a>

            </div>
          </div>
          <div className="col-lg-12 col-xl-8 mb-0 mb-xl-0">
            <div className="p-4 p-sm-5 rounded-2 text-white" id="contact-section">
              <Form id="contact-form" noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Row className="mb-sm-3">
                  <Form.Group className="mb-3" as={Col} md="4" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                    <Form.Control.Feedback type="invalid">
                      Please provide your name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="4" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com" onChange={handleInputChange} required />
                    <Form.Control.Feedback type="invalid">
                      Please provide your email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="4" controlId="phone">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="tel" name="phone" placeholder="+44 01234 567 890" onChange={handleInputChange} required />
                    <Form.Control.Feedback type="invalid">
                      Please provide contact number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3 d-flex flex-column" controlId="message">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={3} onChange={handleInputChange} required />
                  <Form.Control.Feedback type="invalid">
                    Please let me know what you want to discuss.
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className="mt-3 border-0" variant="primary" type="submit" id="contactButton">
                  Submit
                </Button>
              </Form>
              <div id="thankYouMessage" style={displayNone}><h3>Thanks for reaching out {formData.name}! I&apos;ll be in touch to discuss your project within 24 hours.</h3></div>
            </div>
          </div>
        </Row>

      </section >
    </>
  );
}

export default Contact;