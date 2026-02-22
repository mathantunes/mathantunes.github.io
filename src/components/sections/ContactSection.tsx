import { motion } from 'framer-motion';
import ScrollTrigger from '../scroll/ScrollTrigger';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-background dark:bg-dark-background py-20 relative overflow-hidden">
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
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent dark:bg-dark-accent opacity-10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-text dark:text-dark-text mb-6"
            >
              Let's Connect
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              I'm glad you'd like to connect! Let's discuss how I can help you bring your ideas to life.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <a 
                href="mailto:matheus@jamtech.ch"
                className="inline-flex items-center gap-2 text-lg font-medium text-primary-600 dark:text-dark-primary hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                matheus@jamtech.ch
              </a>
            </motion.div>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
}
