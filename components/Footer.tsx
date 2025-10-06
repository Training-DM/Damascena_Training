
import React from 'react';
import { InstagramIcon, StravaIcon, YouTubeIcon } from './icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-gray-400 text-sm mb-4 sm:mb-0">
          © {currentYear} DM Training - Todos os direitos reservados.
        </p>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="https://www.strava.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <StravaIcon className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <YouTubeIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;