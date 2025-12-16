import React from 'react';
import Section from './Section';
import { SKILLS, KEY_COURSES } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-darker/50 text-gray-300 text-sm rounded-full border border-white/5 hover:text-primary hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center text-white mb-8">Key Courses</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {KEY_COURSES.map((course, idx) => (
            <motion.div
              key={course}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="px-4 py-2 bg-gradient-to-r from-darker to-card text-gray-300 rounded-lg border border-white/5"
            >
              {course}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;