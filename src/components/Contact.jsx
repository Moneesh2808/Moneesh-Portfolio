import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlinePaperAirplane } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    emailjs.sendForm(
      'service_tgygh8b', 
      'template_87qeie8', 
      form.current, 
      'f_LGNlAgPzDNA7H8h'
    ).then((result) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
    }, (error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
        console.error('EmailJS Error:', error);
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-500 dark:text-slate-400">Let's build something amazing together</p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                I'm currently looking for new opportunities and collaborations. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <motion.a 
                href={`mailto:${personalInfo.email}`}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <HiOutlineMail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-bold text-lg">{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <HiOutlinePhone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-bold text-lg">{personalInfo.phone}</p>
                </div>
              </motion.a>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <HiOutlineLocationMarker size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-bold text-lg">{personalInfo.location}</p>
                </div>
              </motion.div>
              
              <motion.a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <FaGithub size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="font-bold text-lg">Moneesh2808</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form 
              ref={form}
              onSubmit={handleSubmit}
              className="glass-card p-8 flex flex-col gap-6"
            >
              
              <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-400">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-400">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-slate-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>Send Message <HiOutlinePaperAirplane className="rotate-90" /></>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400 text-sm text-center font-medium animate-pulse">
                  Thank you! Your message has been sent successfully. I will get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm text-center font-medium">
                  Oops! Something went wrong while sending your message. Please try again or email me directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
