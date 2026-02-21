import { motion } from 'framer-motion';
import ScrollTrigger from '../scroll/ScrollTrigger';
import ProjectCard from '../projects/ProjectCard';

const projects = [
  {
    title: 'Progredoc',
    description: 'SaaS application with heavy compliance requirements for document management and workflow automation.',
    techStack: ['Next.js', 'MySQL', 'Google Cloud Platform', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Implemented role-based access control (RBAC) system',
      'Built automated compliance reporting engine',
      'Designed scalable multi-tenant architecture',
      'Integrated with external compliance APIs'
    ],
    tags: [
      { text: 'Compliance Heavy', color: 'primary' },
      { text: 'SaaS', color: 'blue' }
    ]
  },
  {
    title: 'Sedex Integrator',
    description: 'Swiss government communication system integration with event-sourcing architecture for secure data exchange.',
    techStack: ['C#', 'Event Sourcing', 'Docker', 'Private Networking', 'APIs', 'Self-hosted'],
    highlights: [
      'Implemented event-sourcing pattern for audit trails',
      'Designed secure private network infrastructure',
      'Built robust API integrations with government systems',
      'Containerized deployment with Docker'
    ],
    tags: [
      { text: 'Compliance Heavy', color: 'primary' },
      { text: 'Government', color: 'red' },
      { text: 'Event Sourcing', color: 'purple' }
    ]
  },
  {
    title: 'IT Infrastructure Migration to M365',
    description: 'Complete migration from on-premise infrastructure to cloud-only Microsoft 365 environment.',
    techStack: ['Microsoft 365', 'Azure AD', 'PowerShell', 'Migration Tools', 'Compliance Framework'],
    highlights: [
      'Migrated 500+ users to cloud infrastructure',
      'Implemented compliance monitoring and reporting',
      'Automated user provisioning and deprovisioning',
      'Established disaster recovery procedures'
    ],
    tags: [
      { text: 'Compliance Heavy', color: 'primary' },
      { text: 'Cloud Migration', color: 'blue' },
      { text: 'Enterprise', color: 'gray' }
    ]
  }
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <ScrollTrigger>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade solutions with compliance-first architecture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
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
