import { motion, AnimatePresence } from 'framer-motion';
import ScrollTrigger from '../scroll/ScrollTrigger';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  link?: string;
  github?: string;
  color: string;
}

interface ProjectGroup {
  title: string;
  icon: string;
  color: string;
  projects: Project[];
}

const projectsData: ProjectGroup[] = [
  {
    title: 'Compliance Solutions',
    icon: '/assets/icons/compliance.png',
    color: 'from-purple-500 to-pink-500',
    projects: [
      {
        title: 'Progredoc',
        description: 'SaaS application with heavy compliance requirements for document management and workflow automation.',
        technologies: ['Next.js', 'MySQL', 'Google Cloud Platform', 'TypeScript', 'Tailwind', 'Private networking'],
        highlights: [
          'Implemented role-based access control (RBAC) system',
          'Built automated compliance reporting engine',
          'Data-layer isolation multi-tenancy',
          'D-SIPD compliant'
        ],
        color: 'from-purple-500 to-pink-500'
      },
      {
        title: 'Corex',
        description: 'Swiss data exchange platform system integration with event-sourcing architecture for secure data exchange.',
        technologies: ['C#', 'Event Sourcing', 'Docker', 'APIs', 'Self-hosted'],
        highlights: [
          'Implemented event-sourcing pattern for audit trails',
          'Self-hosted with Docker / Kubernetes',
          'Data governance and privacy compliance',
          'Users and systems permissions management',
          'Zero-trust security model'
        ],
        color: 'from-purple-500 to-pink-500'
      },
      {
        title: 'IT Infrastructure Migration',
        description: 'Complete migration from on-premise infrastructure to cloud-only Microsoft 365 environment.',
        technologies: ['Microsoft 365', 'Azure AD', 'PowerShell', 'Migration Tools', 'Compliance Framework'],
        highlights: [
          'Migrated 3 companies from on-premise to cloud-only Microsoft 365 environment',
          'Implemented compliance monitoring and reporting',
          'Automated user provisioning',
          'Established disaster recovery procedures',
          'Zero-trust security model'
        ],
        color: 'from-purple-500 to-pink-500'
      }
    ]
  },
  {
    title: 'Personal Projects',
    icon: '/assets/icons/side-project.png',
    color: 'from-blue-500 to-cyan-500',
    projects: [
      {
        title: 'Globudget',
        description: 'Multi-currency wealth tracking and budget management platform designed for individuals managing finances across different countries and exchange rates. Built for those who need to keep track of multiple currencies and transfers across different exchange rates.',
        technologies: ['Next.js', 'PostgreSQL', 'Currency APIs', 'Charts.js', 'TypeScript'],
        highlights: [
          'Multi-account support for different currencies',
          'Interactive charts and spending analytics',
          'Budget tracking with customizable categories',
          'Secure data storage with end-to-end encryption'
        ],
        github: 'https://github.com/mathantunes/globudget',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        title: 'Swiss Social Insurance RAG Assistant',
        description: 'Self-hosted RAG-based chatbot specialized in Swiss social insurance processes. Built to provide accurate, context-aware responses about complex insurance regulations and procedures using local LLM models.',
        technologies: ['Ollama', 'Qdrant', 'FastAPI', 'Python', 'RAG', 'Vector Search'],
        highlights: [
          'Implemented Retrieval-Augmented Generation (RAG) architecture',
          'Self-hosted using Ollama for local LLM inference',
          'Vector database with Qdrant for efficient document retrieval',
          'FastAPI backend for high-performance API endpoints',
          'Specialized knowledge base for Swiss insurance regulations',
          'Privacy-focused with no external API dependencies'
        ],
        github: 'https://github.com/mathantunes/swiss-insurance-rag',
        color: 'from-blue-500 to-cyan-500'
      }
    ]
  },
  {
    title: 'Retail Solutions',
    icon: '/assets/icons/retail.png',
    color: 'from-green-500 to-emerald-500',
    projects: [
      {
        title: 'Self Checkout System',
        description: 'Modern web-based self checkout solution featuring React frontend with F# backend, designed for Valora retail chain to streamline customer checkout experience and reduce operational costs.',
        technologies: ['React', 'F#', 'Postgres', 'Payments', 'OPI', 'VPN', 'SAP'],
        highlights: [
          'Real-time inventory integration with SAP ERP system',
          'Secure payment processing with multiple payment methods',
          'OPI (Open Payment Initiative) compliance',
          'VPN tunneling for secure data transmission',
          'Responsive design for various screen sizes',
          'Real-time receipt generation and email delivery'
        ],
        color: 'from-green-500 to-emerald-500'
      }
    ]
  }
];

export default function ProjectsShowcase() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeProject, setActiveProject] = useState(0);

  const activeGroupData = projectsData[activeGroup];
  const activeProjectData = activeGroupData.projects[activeProject];

  const handleGroupChange = (newGroup: number) => {
    setActiveGroup(newGroup);
    setActiveProject(0); // Reset to first project when switching groups
  };

  return (
    <section id="projects" className="min-h-screen bg-background dark:bg-dark-background py-20">
      <ScrollTrigger>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text dark:text-dark-text mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade solutions with compliance-first architecture
            </p>
          </motion.div>

          {/* Projects Dock */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
            
            {/* Group Dock */}
            <div className="flex flex-row md:flex-col gap-3 md:gap-4 order-2 md:order-1">
              {projectsData.map((group, index) => {
                const isActive = index === activeGroup;

                return (
                  <motion.button
                    key={group.title}
                    onClick={() => handleGroupChange(index)}
                    whileHover={{ scale: 1.1, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      backgroundColor: isActive ? 'rgba(99,102,241,0.1)' : 'rgba(255,255,255,0.05)',
                      borderColor: isActive ? 'rgb(99,102,241)' : 'rgba(255,255,255,0.1)',
                      x: isActive ? 4 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl border-2 shadow-sm bg-white dark:bg-gray-800 text-xl md:text-2xl transition-colors"
                    style={{ 
                      borderColor: isActive ? '#6366f1' : undefined,
                      backgroundColor: isActive ? 'rgba(99,102,241,0.1)' : undefined
                    }}
                  >
                    <img 
                      src={group.icon} 
                      alt={group.title}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Content Panel */}
            <div className="relative w-full max-w-2xl h-[60vh] min-h-[500px] max-h-[700px] flex items-start order-1 md:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGroup}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                  className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700 overflow-y-auto flex flex-col"
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activeProjectData.color} opacity-5`}
                  />

                  <div className="relative z-10">
                    {/* Project Navigation */}
                    {activeGroupData.projects.length > 1 && (
                      <div className="flex gap-2 mb-4">
                        {activeGroupData.projects.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveProject(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === activeProject 
                                ? 'bg-primary-500' 
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                      {activeProjectData.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                      {activeProjectData.description}
                    </p>

                    {/* Highlights */}
                    {activeProjectData.highlights && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                        <ul className="text-xs md:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          {activeProjectData.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary-500 mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                      {activeProjectData.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 md:px-4 py-1 md:py-1.5 bg-primary-200/40 dark:bg-dark-primary/20 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-3">
                      {activeProjectData.github && (
                        <a
                          href={activeProjectData.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                      {activeProjectData.link && (
                        <a
                          href={activeProjectData.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              And many more enterprise projects focused on scalable, compliant solutions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-500 dark:bg-dark-primary text-white rounded-lg font-medium hover:bg-primary-600 dark:hover:bg-dark-accent transition-colors"
            >
              View Full Portfolio
            </motion.button>
          </motion.div>
        </div>
      </ScrollTrigger>
    </section>
  );
}
