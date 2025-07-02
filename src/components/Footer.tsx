import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-slate-400 flex items-center justify-center">
            Built with 
            <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" />
            using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © 2025 Yash Chourasia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;