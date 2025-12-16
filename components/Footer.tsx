import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-darker border-t border-white/5 text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Aman Dubey. Built with React & Tailwind.</p>
    </footer>
  );
};

export default Footer;