import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import contact from './assets/contact.webp'
import tickmark from './assets/tickmark.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_5cldg5q';
    const templateID = 'template_ujwe72u';
    const userID = '2ECX0MxXTwNm6xMZH';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Marketing Team' // Replace with the recipient's name or company name
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        setStatus('SUCCESS');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        setStatus('ERROR');
      });
  };

  return (
    <section id="contact" className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <p>Telephone: +91 90436 32463</p>
        <p>Email: marketing@dgts.co.in</p>
        <p>Working Hours: Mon - Fri: 9am - 6pm</p>
      </div>
      <div className="contact-container">
        <div className="contact-form-container">
          {status === 'SUCCESS' ? (
            <div className="success-message">
              <p>  <img src={tickmark} alt="Thank You" /> </p>
              <h2>Thank you! Your message has been sent successfully.</h2>
            </div>
          ) : status === 'ERROR' ? (
            <div className="error-message">
              <p>Failed to send your message. Please try again.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send</button>
            </form>
          )}
        </div>
        <div className="contact-image-container">
          <img src={contact} alt="Contact Us" />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;