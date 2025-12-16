import React from 'react';
import Section from './Section';
import { EDUCATION, CERTIFICATIONS, ACHIEVEMENTS, POSITIONS } from '../constants';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Medal } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Experience & Education">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <div>
          <h3 className="flex items-center text-2xl font-bold text-white mb-6">
            <GraduationCap className="mr-3 text-primary" /> Education
          </h3>
          <div className="space-y-8 pl-4 border-l-2 border-white/10 ml-3">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <span className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-darker border-2 border-primary"></span>
                <h4 className="text-lg font-semibold text-white">{edu.institution}</h4>
                <p className="text-primary font-medium">{edu.degree}</p>
                <div className="flex justify-between items-center text-sm text-gray-400 mt-1">
                  <span>{edu.year}</span>
                  <span className="font-semibold text-gray-300">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience/Responsibility Column */}
        <div className="space-y-12">
          {/* Responsibility */}
          <div>
            <h3 className="flex items-center text-2xl font-bold text-white mb-6">
              <Briefcase className="mr-3 text-secondary" /> Responsibility
            </h3>
            <div className="space-y-4">
              {POSITIONS.map((pos, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-4 rounded-lg border border-white/5"
                >
                  <h4 className="text-white font-semibold">{pos.role}</h4>
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>{pos.organization}</span>
                    <span className="text-secondary">{pos.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="flex items-center text-2xl font-bold text-white mb-6">
              <Medal className="mr-3 text-yellow-500" /> Achievements
            </h3>
            <div className="space-y-3">
              {ACHIEVEMENTS.map((ach, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <p className="text-gray-200">{ach.title}</p>
                    <span className="text-xs text-gray-500">{ach.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="flex items-center text-2xl font-bold text-white mb-6">
              <Award className="mr-3 text-green-500" /> Certifications
            </h3>
            <div className="space-y-3">
               {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="bg-darker/50 p-3 rounded border border-white/5">
                  <p className="text-gray-200 font-medium">{cert.name}</p>
                  <p className="text-sm text-gray-500">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;