import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface SkillCard {
  title: string;
  icon: string;
  description: string;
  skills: string[];
  color: string;
}

const skillsData: SkillCard[] = [
  {
    title: 'Development',
    icon: '💻',
    description: 'Building robust applications',
    skills: ['TypeScript', 'React', 'Node.js', 'Nextjs', 'C#', '.NET', 'F#', 'Go', 'Git', 'SQL'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'DevOps',
    icon: '🌐',
    description: 'Designing scalable architectures',
    skills: ['Azure', 'AWS', 'GCP', 'Terraform', 'CI/CD', 'Docker', 'Microsoft 365'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Sec & Compliance',
    icon: '🛡️',
    description: 'Ensuring enterprise standards',
    skills: ['Fortigate', 'Private networking', 'Data Protection'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'AI',
    icon: '🤖',
    description: 'Accelerating innovation',
    skills: ['Claude', 'LangChain', 'Ollama', 'Qdrant', 'RAGs'],
    color: 'from-red-500 to-orange-500'
  }
];

export default function SkillDock() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSkill = skillsData[activeIndex];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto px-4">
      
      {/* Icon Dock - Horizontal on mobile, Vertical on desktop */}
      <div className="flex flex-row md:flex-col gap-3 md:gap-4 order-2 md:order-1">
        {skillsData.map((skill, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.button
              key={skill.title}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor: isActive ? 'rgba(99,102,241,0.1)' : 'transparent',
                borderColor: isActive ? 'rgb(99,102,241)' : 'rgb(229,231,235)',
                x: isActive ? 4 : 0
              }}
              transition={{ duration: 0.2 }}
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl border-2 shadow-sm bg-white dark:bg-gray-800 text-xl md:text-2xl transition-colors"
              style={{ 
                borderColor: isActive ? '#6366f1' : undefined,
                backgroundColor: isActive ? 'rgba(99,102,241,0.1)' : undefined
              }}
            >
              {skill.icon}
            </motion.button>
          );
        })}
      </div>

      {/* Content Panel */}
      <div className="relative w-full md:w-[420px] h-[240px] md:h-[272px] flex items-center order-1 md:order-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col justify-center"
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activeSkill.color} opacity-5`}
            />

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                {activeSkill.title}
              </h3>

              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                {activeSkill.description}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {activeSkill.skills.map((skillItem) => (
                  <span
                    key={skillItem}
                    className="px-2 md:px-4 py-1 md:py-1.5 bg-primary-200/40 dark:bg-dark-primary/20 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm font-medium"
                  >
                    {skillItem}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}