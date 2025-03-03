import React, { useState, useEffect } from 'react';
import { FiFacebook, FiLinkedin, FiInstagram, FiArrowRight } from 'react-icons/fi';
import AOS from 'aos';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual form submission logic (e.g., axios.post('/mail.php', formData))
    console.log('Form submitted:', formData);
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' }); // Reset form
  };

  return (
    <section id="contacts" className="pt-24 pb-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <span className="text-gray-500 text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Contact With Me</h2>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 md:mt-10 sm:mt-8">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <img
                  src="/assets/images/contact/contact1.png" // Replace with actual path
                  alt="Contact"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-gray-800">Nevine Acotanza</h4>
                <span className="text-gray-600 text-sm">Chief Operating Officer</span>
              </div>
              <div className="mt-4 text-gray-600">
                <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                <p className="mt-2">
                  Phone: <a href="tel:+01234567890" className="text-blue-500 hover:underline">+01234567890</a>
                </p>
                <p>
                  Email: <a href="mailto:admin@example.com" className="text-blue-500 hover:underline">admin@example.com</a>
                </p>
              </div>
              <div className="mt-6">
                <div className="text-gray-700 font-medium uppercase text-sm">Find With Me</div>
                <div className="flex justify-center gap-4 mt-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <FiFacebook size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <FiLinkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <FiInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-up" data-aos-delay="600">
            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
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
                <div className="col-span-1">
                  <label htmlFor="contact-phone" className="block text-gray-700 font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="col-span-2">
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
                <div className="col-span-2">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="contact-message" className="block text-gray-700 font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="6"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <span>Send Message</span>
                    <FiArrowRight size={24} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;