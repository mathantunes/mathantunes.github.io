import { motion } from 'framer-motion';
import ScrollTrigger from '../scroll/ScrollTrigger';

export default function HeroSection() {
  const techStack = [
    'TypeScript', 'React', 'Node.js', 'C#', 'F#', '.NET',
    'Go', 'Azure', 'AWS', 'Git', 'Terraform', 'Microsoft 365'
  ];
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/matheusantunes', icon: '/assets/icons/linkedin.svg' },
    { name: 'GitHub', url: 'https://github.com/matheusantunes', icon: '/assets/icons/github.svg' },
    { name: 'JAMTech', url: 'https://jamtech.ch', icon: '/assets/icons/jamtech.svg' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative overflow-hidden">
      <ScrollTrigger onEnter={() => console.log('Hero entered')}>
        <div className="text-center z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Matheus Antunes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Fullstack Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Specializing in architecture, cloud systems, and compliance-heavy applications
          </motion.p>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mt-8 mb-8 max-w-2xl mx-auto"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary-100 dark:bg-gray-700 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center gap-4 mb-12"
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
                <img
                  src={link.icon}
                  alt={link.name}
                  className={`w-5 h-5 ${link.name.includes('JAMTech') ? 'scale-[250%]' : ''}`}
                />
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-primary-500 dark:border-dark-primary rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary-500 dark:bg-dark-primary rounded-full mt-2"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </ScrollTrigger>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-dark-primary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 dark:bg-dark-accent opacity-20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
