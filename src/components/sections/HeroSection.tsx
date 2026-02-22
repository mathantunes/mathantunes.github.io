import { motion } from 'framer-motion';
import ScrollTrigger from '../scroll/ScrollTrigger';
import SkillCards from './SkillCards';
import * as svg from '../svg';

export default function HeroSection() {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/matheusantunes', icon: svg.Linkedin },
    { name: 'GitHub', url: 'https://github.com/matheusantunes', icon: svg.Github },
    { name: 'JAMTech', url: 'https://jamtech.ch', icon: svg.JAMTech }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-background dark:bg-dark-background relative overflow-hidden pt-20">
      <ScrollTrigger onEnter={() => console.log('Hero entered')}>
        <div className="text-center z-10 px-4">
          <div className="flex flex-col md:flex-row items-center py-4">
            <div className="text-left flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-text dark:text-dark-text mb-2"
              >Matheus Antunes</motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
              >Fullstack Software Engineer | Cloud Architect</motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              >🇨🇭 Zurich, Switzerland</motion.p>
            </div>
            <div className="flex-shrink-0">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.6 },
                  scale: { duration: 0.8, delay: 0.6 },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                src="/assets/M.jpg"
                alt="Matheus Antunes"
                className="w-40 h-40 object-cover rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <SkillCards />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-4 mb-12 mt-16"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {link.icon()}
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </ScrollTrigger>
    </section>
  );
}
