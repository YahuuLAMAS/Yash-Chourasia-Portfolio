import React from 'react';
import { Code, Users, Lightbulb, Target, Cpu, Zap, Brain, Wrench } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Passionate about applying AI concepts to solve real-world problems, with hands-on experience in TensorFlow and computer vision."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT & Embedded Systems",
      description: "Skilled in Arduino, ESP32, and sensor integration to create smart solutions that bridge physical and digital worlds."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Always seeking creative ways to combine hardware and software to build intelligent automation systems."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Hands-on Builder",
      description: "Love turning ideas into working prototypes, from concept to implementation with attention to detail."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            👋 About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hi, I'm Yash Chourasia, a passionate and hardworking B.Tech student specializing in 
            Electronics and Communication Engineering (2022–2026) from SD Bansal College of Technology, Indore. 
            I'm deeply interested in the intersection of AI, IoT, and embedded systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-amber-50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {highlight.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center">
              💻 What I Do
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I work with a range of technologies including Python, C/C++, Arduino, ESP32, and various sensors. 
              I've recently completed an AI & Machine Learning internship using Python, and I've applied those 
              skills in several hands-on projects. I'm currently expanding my knowledge into low-code development, 
              Microsoft Power Platform, and Azure AI.
            </p>
            
            <h4 className="text-xl font-bold text-slate-800 mb-4">🏆 Achievements</h4>
            <ul className="text-lg text-slate-600 leading-relaxed mb-6 space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                Completed a certified AIML internship from Eduexpose
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                Led a 7-member team in intercollegiate basketball competitions
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                Improved project efficiency by 20% through better planning and execution
              </li>
            </ul>

            <h4 className="text-xl font-bold text-slate-800 mb-4">📚 Currently Learning</h4>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I'm exploring Microsoft's Power Platform and low-code app development. I'm developing better 
              personal habits with inspiration from books like Atomic Habits.
            </p>

            <h4 className="text-xl font-bold text-slate-800 mb-4">🌱 What's Next?</h4>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm looking forward to opportunities that combine AI, IoT, and automation to solve real-world problems. 
              If you're working on something innovative—or looking for someone who loves building and learning—I'd love to connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;