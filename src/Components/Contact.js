import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Have a Question?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <form
        className="contact-form-container"
        action="https://api.web3forms.com/submit"
        method="POST"
        
      >
        {/* Required Hidden Input for Web3Forms */}
        <input type="hidden" name="access_key" value="1967ee7b-7de8-423d-ae30-ed63cda11cf7" />
        
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company/Business Name"
          value={formData.company}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className="secondary-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;