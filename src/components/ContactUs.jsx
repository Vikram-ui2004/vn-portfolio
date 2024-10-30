import React, { useState,useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';



const ContactUs = () => {
    const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
   
    emailjs.sendForm('service_hwtdzet', 'template_p029pec', form.current, {publicKey: '-hm_Q4r6h-aiL6vie',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
     
      setFormData({
        name:'',
        email:'',
        message:''
    })

    console.log('Form submitted:', formData);
  };


  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title" id='con'>Contact Us</h2>
        <p className="contact-description">
          Feel free to reach out if you have any questions or just want to say hello!
        </p>

        <form  ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="form-textarea"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
