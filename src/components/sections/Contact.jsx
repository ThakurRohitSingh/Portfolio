import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify'; // Importing both toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importing Toastify CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! Thank you for your message. I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-6 text-muted-foreground">
              Feel free to reach out! I'm open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground">thakurrohitsingh04@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Bhopal, India</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors w-full flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} className="ml-2" /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact