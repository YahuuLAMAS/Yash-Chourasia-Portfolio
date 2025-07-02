import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/resumeData';

const Education: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My academic background and continuous learning journey in technology and leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="p-3 bg-emerald-500 text-white rounded-lg mr-4">
                  {edu.degree.includes('Certificate') ? (
                    <Award className="w-6 h-6" />
                  ) : (
                    <GraduationCap className="w-6 h-6" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">
                      Class of {edu.year}
                    </span>
                    {edu.gpa && (
                      <span className="text-slate-600 font-medium">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;