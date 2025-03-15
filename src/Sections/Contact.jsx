import React, { useState, useEffect } from 'react';
import { FiFacebook, FiLinkedin, FiGithub, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com'; // For sending emails
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [alertMessage, setAlertMessage] = useState(null); // For showing alert

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        'service_5jc251r', // EmailJS service ID
        'template_n2qefzj', // EmailJS template ID
        formData,
        'oyplEiOGy7obUXjPb' // EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setAlertMessage({ type: 'success', text: 'Message sent successfully!' });
          setFormData({ name: '', email: '', message: '' }); // Reset form
          setTimeout(() => setAlertMessage(null), 3000); // Hide alert after 3 seconds
        },
        (error) => {
          console.error('Failed to send email:', error);
          setAlertMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
          setTimeout(() => setAlertMessage(null), 3000); // Hide alert after 3 seconds
        }
      );
  };

  return (
    <section id="contacts" className="pt-24 pb-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-gray-500 text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Get in Touch</h2>
        </div>

        {/* Show Alert Message */}
        {alertMessage && (
          <div
            className={`toast toast-top toast-center z-50 ${alertMessage.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
          >
            <div className={`alert ${alertMessage.type === 'success' ? 'alert-success' : 'alert-error'}`}>
              {/* Success Icon */}
              {alertMessage.type === 'success' ? (
                <FiSend size={24} className="mr-3" />
              ) : (
                <FiMail size={24} className="mr-3" />
              )}
              <span>{alertMessage.text}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
          {/* Contact Info Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border">
            <div className="mb-4 text-center">
              <h4 className="text-2xl font-semibold text-gray-800">Contact Info</h4>
            </div>
            <div className="border-b pb-4 mb-4 flex items-center gap-3">
              <FiMapPin size={24} className="text-blue-500" />
              <p className="text-gray-600">Kanchpur, Sonagroan, Narayangonj, Bangladesh</p>
            </div>
            <div className="border-b pb-4 mb-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <FiPhone size={24} className="text-blue-500" />
                <a href="tel:+8801521738141" className="text-blue-500 hover:underline">+8801521738141</a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail size={24} className="text-blue-500" />
                <a href="mailto:durjoykumar177@gmail.com" className="text-blue-500 hover:underline">durjoykumar177@gmail.com</a>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/durjoy-kumar/" className="text-gray-600 hover:text-blue-500">
                <FiLinkedin size={24} />
              </a>
              <a href="https://www.facebook.com/durjoykumar.sarker.9" className="text-gray-600 hover:text-blue-500">
                <FiFacebook size={24} />
              </a>
              <a href="https://github.com/DurjoyKumar177" className="text-gray-600 hover:text-blue-500">
                <FiGithub size={24} />
              </a>
              <a href="https://discord.com/users/750024693913747632" className="text-gray-600 hover:text-blue-500">
                <FaDiscord size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-gray-700 font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <span>Send Message</span>
                  <FiSend size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
