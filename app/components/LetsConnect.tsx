'use client'
import React, { useState } from 'react';

interface LetsConnectProps {
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

const LetsConnect: React.FC<LetsConnectProps> = ({
  email = 'youremail@example.com',
  github = 'https://github.com/username',
  linkedin = 'https://linkedin.com/in/username',
  twitter = 'https://twitter.com/username',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nMessage: ${formData.message}`);
    setFormData({ name: '', message: '' });
  };

  return (
    <section
      aria-labelledby="connect-title"
      className="max-w-4xl mx-auto px-4 py-20 text-center"
      id='connect'
    >
      <h2
        id="connect-title"
        className="text-3xl font-semibold tracking-tight mb-6"
      >
        Let&apos;s Connect!
      </h2>
      <p className="mb-10 text-gray-600">
        Feel free to reach out via social media or send me a message directly.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-12">
        <a
          href={`mailto:${email}`}
          className="transition hover:text-blue-500"
          aria-label="Email"
        >
          📧
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-gray-900"
          aria-label="GitHub"
        >
          💻
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-blue-700"
          aria-label="LinkedIn"
        >
          🔗
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-blue-400"
          aria-label="Twitter"
        >
          🐦
        </a>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-2 rounded-lg bg-blue-600 px-6 py-2 text-white font-medium transition hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default LetsConnect;
