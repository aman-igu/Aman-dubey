import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
          >
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6 text-gray-300 text-sm list-disc pl-4">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 bg-darker/30 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-500 font-mono">
                 Date: {project.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;