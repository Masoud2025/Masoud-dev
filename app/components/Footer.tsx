import React from 'react';

interface FooterProps {
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

const Footer: React.FC<FooterProps> = ({
  email = 'youremail@example.com',
  github = 'https://github.com/username',
  linkedin = 'https://linkedin.com/in/username',
  twitter = 'https://twitter.com/username',
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-sm">&copy; {currentYear} Masoud Jafari. All rights reserved.</p>

        {/* Center: Navigation (optional) */}
        <nav className="flex gap-4 text-sm">
          <a href="#who-am-i" className="hover:text-white transition">About</a>
          <a href="#my-skills" className="hover:text-white transition">Skills</a>
          <a href="#my-projects" className="hover:text-white transition">Projects</a>
          <a href="#connect" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Right: Social Links */}
        <div className="flex gap-4 text-lg">
          <a href={`mailto:${email}`} aria-label="Email" className="hover:text-white transition">📧</a>
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">💻</a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">🔗</a>
          <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition">🐦</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
