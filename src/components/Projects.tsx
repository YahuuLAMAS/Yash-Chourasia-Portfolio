import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, Brain, Cpu, Zap, Code, X } from 'lucide-react';
import { projects } from '../data/resumeData';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const getProjectIcon = (title: string) => {
    if (title.includes('Digit Recognition')) return <Brain className="w-6 h-6" />;
    if (title.includes('Robo Grip')) return <Cpu className="w-6 h-6" />;
    if (title.includes('Energy Meter')) return <Zap className="w-6 h-6" />;
    return <Cpu className="w-6 h-6" />;
  };

  const CodeModal = ({ project, onClose }: { project: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-bold text-slate-800">{project.title} - Code</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{project.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            🛠 Projects I've Built
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my hands-on projects that demonstrate my ability to combine 
            AI, IoT, and embedded systems to create innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Image */}
              {project.imageUrl && (
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-emerald-100 to-blue-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 p-2 bg-white/90 rounded-lg">
                    {getProjectIcon(project.title)}
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-200"
                      >
                        <Github size={18} className="mr-2" />
                        Code
                      </a>
                    )}
                    {project.codeSnippet && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors duration-200 font-semibold"
                      >
                        <Code size={18} className="mr-2" />
                        View Code
                      </button>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors duration-200 font-semibold"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                  
                  <ArrowRight 
                    size={20} 
                    className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-xl text-emerald-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects that combine AI, IoT, and automation. 
              Let's build something amazing together that solves real-world problems!
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-emerald-600 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      {/* Code Modal */}
      {selectedProject && (
        <CodeModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;