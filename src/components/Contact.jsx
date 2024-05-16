import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { motion } from 'framer-motion';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();

  const [validated, setValidated] = useState(false);

  const contactForm = document.querySelector('#contact-form');
  const thankYouMessage = document.querySelector('#thankYouMessage');
  const displayNone = { display: 'none' }
  const displayBlock = { display: 'block' }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const myForm = e.currentTarget;

    // checks if input fields have passed validation
    if (myForm.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      // displays thank you message if all fields have been validated and hides form
      thankYouMessage.style = { displayBlock }
      contactForm.style.display = 'none';
    }

    // Updating the forms validated state to be true
    setValidated(true);

    emailjs
      .sendForm('service_iexlgqf', 'template_fpprsue', form.current, {
        publicKey: 'QyHKUwnZacZj_blyQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    // setValidated(true);
  };



  // Setting initial state to an object
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_number: '',
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

  // const handleFormSubmit = (event) => {

  //   event.preventDefault();

  //   const form = event.currentTarget;

  //   // checks if input fields have passed validation
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   } else {
  //     // displays thank you message if all fields have been validated and hides form
  //     thankYouMessage.style = { displayBlock }
  //     contactForm.style.display = 'none';
  //   }

  //   // Updating the forms validated state to be true
  //   setValidated(true);
  //   console.log(formData)

  // }

  return (
    <>

      <section id="intro">
        <div className="container py-0 py-sm-5 px-4 px-sm-0">
          <div className="row gx-5 d-flex flex-wrap align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 col-lg-8 py-4  py-lg-0 d-flex justify-content-start">
              <motion.h1 className="display-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>Contact me</motion.h1>

            </div>


          </div>
        </div>
      </section>

      <section className="container py-5 px-4 px-sm-0 mt-lg-4">
        <Row>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.33 }} className="col-lg-12 col-xl-4 mb-5 mb-xl-0">


            <p>
              Need to get in touch? No problem! Feel free to reach out to me via email or phone, whichever floats your boat. Alternatively, you can drop me a line using the adjacent form.</p>
            <p>
              Looking forward to hearing from you!</p>

            <div className="btn-toolbar mt-4">
              <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 }} className="btn btn-primary me-3 border-0" href="mailto:richard.lee.llewellyn@gmail.com" type="button"><i className="fa-solid fa-envelope me-3 border-0"></i>Email Me</motion.a>
              <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }} href="https://wa.me/07538820382" className="btn btn-secondary me-2 border-0" type="button" target="_blank"><i className="fa-brands fa-whatsapp me-2"></i>WhatsApp Me!</motion.a>

            </div>
          </motion.div>
          <div className="col-lg-12 col-xl-8 mb-0 mb-xl-0">
            <motion.div className="p-4 p-sm-5 rounded-2 text-white" id="contact-section" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ delay: 1 }} exit={{ opacity: 0 }}>
              <Form ref={form} id="contact-form" noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Row className="mb-sm-3">
                  <Form.Group className="mb-3" as={Col} md="4" controlId="user_name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                    <Form.Control.Feedback type="invalid">
                      Please provide your name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="4" controlId="user_email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="user_email" placeholder="name@example.com" onChange={handleInputChange} required />
                    <Form.Control.Feedback type="invalid">
                      Please provide your email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="4" controlId="user_number">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="tel" name="user_number" placeholder="+44 01234 567 890" onChange={handleInputChange} required />
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
              <div id="thankYouMessage" style={displayNone}><h3><span className="d-block mb-4">Thanks for reaching out {formData.name}! </span><span className="d-block">I&apos;ll be in touch to discuss your project within 24 hours.</span></h3></div>
            </motion.div>
          </div>
        </Row>

      </section >
    </>
  );
}

export default Contact;