import React from 'react';
import { skills } from '../data/resumeData';

const Skills: React.FC = () => {
  const skillCategories = {
    frontend: { title: 'Programming Languages', color: 'from-blue-500 to-cyan-500' },
    backend: { title: 'IoT & Embedded Systems', color: 'from-emerald-500 to-teal-500' },
    tools: { title: 'ML Tools & Platforms', color: 'from-purple-500 to-pink-500' },
    soft: { title: 'Soft Skills', color: 'from-amber-500 to-orange-500' }
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            🧠 Skills I Bring
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and competencies, 
            developed through hands-on projects and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, config]) => (
            <div key={category} className="bg-slate-50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${config.color} mr-3`}></div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                  {config.title}
                </h3>
              </div>

              <div className="space-y-4">
                {getSkillsByCategory(category).map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${config.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{ 
                          width: `${skill.level}%`,
                          transform: `scaleX(${skill.level / 100})`,
                          transformOrigin: 'left'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;