import React from 'react';
import Section from './Section';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" className="pb-32">
      <div className="flex flex-col items-center text-center">
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          I'm currently looking for opportunities in Software Engineering and Machine Learning. 
          Feel free to reach out if you have any questions or just want to say hi!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-8 bg-card rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-card/80 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{link.name}</h4>
                <span className="text-sm text-gray-500 group-hover:text-primary transition-colors truncate w-full px-2">
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Contact;