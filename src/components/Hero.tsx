import React from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/resumeData';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = (type: 'iot' | 'aiml') => {
    const fileName = type === 'iot' 
      ? 'Yash-chourasia for EC on IOT based projects.pdf'
      : 'Yash-chourasia Resume for AIML.pdf';
    
    const link = document.createElement('a');
    link.href = `/resumes/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-emerald-600 font-medium mb-6">
            {personalInfo.title}
          </h2>

          {/* Summary */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {personalInfo.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="relative group">
              <button className="px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="p-2">
                  <button
                    onClick={() => handleDownloadResume('iot')}
                    className="w-full text-left px-4 py-3 text-slate-700 hover:bg-emerald-50 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <Download size={16} />
                    IoT & Electronics Resume
                  </button>
                  <button
                    onClick={() => handleDownloadResume('aiml')}
                    className="w-full text-left px-4 py-3 text-slate-700 hover:bg-emerald-50 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <Download size={16} />
                    AI & ML Resume
                  </button>
                </div>
              </div>
            </div>
            
            <a
              href={`mailto:${contactInfo.email}`}
              className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200 flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-slate-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-slate-600 hover:text-slate-800 transition-all duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-emerald-600 transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;