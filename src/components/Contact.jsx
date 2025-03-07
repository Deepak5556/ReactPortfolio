import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateAndSendMail = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!',
      });
      return;
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      });
      return;
    }

    // Sending email using EmailJS
    emailjs.send('service_e8xqd4q', 'template_mv7g8br', {
      from_name: name,
      from_email: email,
      message: message
    }, '5bpfB40U5_MRYFf3D')
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for your message. I will get back to you soon!',
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error Sending Message',
        text: 'Something went wrong. Please try again later.',
      });
    });
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Do you have a project in mind? Contact me here</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <div className="contact-info h-full flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-6">Find Me</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <Mail size={20} />
                <span>Email: deepakviji5556@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={20} />
                <span>Phone: 7010797161</span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <form onSubmit={validateAndSendMail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="input-field"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="input-field"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              className="w-full bg-transparent border-2 border-gray-300 rounded-lg p-5 outline-none focus:border-primary transition-all duration-300"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;