import { motion } from 'framer-motion';
import ScrollTrigger from '../scroll/ScrollTrigger';
import CareerTimeline from './CareerTimeline';

export default function AboutSection() {
  const skills = [
    'Software development', 'Cloud Architecture', 'DevOps', 'Database Design', 'Compliance', 'Security', 'Microservices', 'Networking'
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-50 dark:bg-gray-800 py-20 relative overflow-hidden">
      <ScrollTrigger>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-dark-primary opacity-10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 dark:bg-dark-accent opacity-10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Fullstack engineer with expertise in building scalable, compliant enterprise solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm Matheus, a Software Engineer passionate about building robust, scalable, and secure systems.
                  My journey in technology has been driven by curiosity and a commitment to continuous learning around fullstack development but also everything else that allows applications to be built and run.
                </p>
                <p>
                  While I bring expertise across the full stack, I also have a strong background in designing systems using cloud infrastructure or self-hosting.
                  More recently I have been involved in projects with a heavy focus on compliance and data security.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="bg-white dark:bg-gray-900 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <span className="text-gray-900 dark:text-white font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 text-gray-600 dark:text-gray-300">
              <div>
                <div className="text-3xl font-bold text-primary-500 dark:text-dark-primary">7+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 dark:text-dark-primary">4+</div>
                <div className="text-sm">Industries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </ScrollTrigger>

      <CareerTimeline />
    </section>
  );
}
