import { motion } from 'framer-motion';
import { useState } from 'react';

interface CareerNode {
  title: string;
  company: string;
  period: string;
  description: string;
  start: number;
  isFork?: boolean;
  isConvergence?: boolean;
  highlights: string[];
  techStack: string[];
  certifications?: string[];
}

const careerData: CareerNode[] = [
  {
    title: 'Co-Founder 🇨🇭',
    company: 'JAMTech',
    period: '2024 - Present',
    description: 'Building innovative tech solutions',
    highlights: [
      'Designed and delivered multiple end-to-end cloud migrations from on-premises infrastructure to Azure and Microsoft 365 Enterprise',
      'Architected secure identity and device management solutions using Entra ID, Intune, and zero-trust principles',
      'Technical owner of Progredoc, a SaaS platform for social insurance, built with Next.js, React, and MySQL on Google Cloud Platform',
      'Designed CI/CD pipelines, infrastructure automation, and production monitoring from ground up',
      'Integrated AI-assisted development workflows (Cursor, Claude) to accelerate feature delivery and architectural prototyping 🤖'
    ],
    techStack: ['Next.js', 'React', 'MySQL', 'GCP', 'Azure', 'Microsoft 365', 'Entra ID', 'Intune', 'CI/CD', 'VPN', 'Fortigate'],
    start: 2024,
    isFork: true
  },
  {
    title: 'Senior Fullstack Engineer 🇨🇭',
    company: 'Valora',
    period: '2023 - Present',
    description: 'Leading fullstack development and cloud architecture for retail solutions',
    start: 2023,
    highlights: [
      'Led end-to-end implementation of a self-checkout platform, including backend services and enterprise integrations, deployed across hundreds of stores',
      'Designed cloud architecture and implemented Terraform-based infrastructure provisioning for Azure',
      'Led a mission-critical cloud interconnection project between GCP and Azure, ensuring secure hybrid connectivity'
    ],
    techStack: ['F#', 'React', 'Firebase', 'PostgreSQL', 'GCP', 'Azure', 'Terraform', 'GitHub', 'Intune'],
  },
  {
    title: 'Fullstack Software Engineer 🇨🇭',
    company: 'Loanboox',
    period: '2021 - 2023',
    description: 'Built fullstack applications for fintech industry',
    start: 2021,
    highlights: [
      'Designed and implemented subscription-based product features, directly increasing platform revenue',
      'Led technical implementation of a white-labeling solution to expand into German market',
      'Managed Azure infrastructure, deployments, and CI/CD workflows'
    ],
    techStack: ['Angular', 'C#', 'Azure', 'Azure DevOps', 'Entity Framework'],
    certifications: ['Microsoft Azure Developer Associate'],
  },
  {
    title: 'Software Engineer 🇧🇷',
    company: 'BTG Pactual',
    period: '2020 - 2021',
    description: 'Developed financial software solutions',
    start: 2020,
    highlights: [
      'Designed and implemented serverless data pipelines using AWS SAM and Jenkins',
      'Architected an event-driven framework (C#, messaging systems) improving microservices performance by 30%',
      'Built centralized serverless data lake ingestion pipelines (Node.js, AWS)'
    ],
    techStack: ['C#', 'Go', 'Node.js', 'AWS', 'SAM', 'Jenkins', 'Microservices', 'Kubernetes', 'NGINX', 'RabbitMQ', 'IBM MQ'],
    certifications: ['AWS Solutions Architect Associate'],
  },
  {
    title: 'Software Developer 🇧🇷',
    company: 'Alstom',
    period: '2017 - 2020',
    description: 'Started career in software analysis and development',
    highlights: [
      'Delivered a modular communication system for automated railway systems',
      'Implementation of features for central signaling system for São Paulo subway'
    ],
    techStack: ['C++', 'C#', 'Go', 'Docker', 'GitLab', 'Protobuf', 'gRPC', 'NATs', 'Kubernetes'],
    start: 2017
  }
];

export default function CareerTimeline() {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const handleNodeClick = (index: number) => {
    setSelectedNode(selectedNode === index ? null : index);
  };

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Career Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
          <div className="space-y-8">
            {careerData.map((node, index) => {
              const originalIndex = careerData.findIndex(n => n === node);
              const isSelected = selectedNode === originalIndex;

              return (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Node */}
                  <motion.button
                    onClick={() => handleNodeClick(originalIndex)}
                    className={`relative z-10 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 transition-all duration-300 ${isSelected
                      ? 'bg-primary-500 dark:bg-dark-primary scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400 dark:hover:bg-dark-primary-400'
                      }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <motion.div
                      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md border-2 border-gray-200 dark:border-gray-700 p-4 cursor-pointer transition-all duration-300 ${isSelected ? 'ring-2 ring-primary-500 dark:ring-dark-primary' : ''
                        }`}
                      onClick={() => handleNodeClick(originalIndex)}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        borderColor: "rgb(99 102 241)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                        {node.title}
                      </h3>
                      <p className="text-primary-500 dark:text-dark-primary text-xs font-medium mb-1">
                        {node.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                        {node.period}
                      </p>
                      {node.certifications && node.certifications.length > 0 && (
                        <div className="mb-3">
                          <h4 className="text-xs text-gray-900 dark:text-white">Certifications:</h4>
                          <ul className="space-y-1">
                            {node.certifications.map((cert, idx) => (
                              <li key={idx} className="text-left">
                                <span className="text-primary-500 dark:text-dark-primary mr-2">•</span>
                                <span className="text-xs text-gray-600 dark:text-gray-300">{cert}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <motion.div
                        initial={false}
                        animate={{
                          height: isSelected ? 'auto' : 0,
                          opacity: isSelected ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">
                          {node.description}
                        </p>

                        {node.highlights.length > 0 && (
                          <div className="mb-3">
                            <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
                            <ul className="space-y-1">
                              {node.highlights.map((highlight, idx) => (
                                <li key={idx} className="text-left">
                                  <span className="text-primary-500 dark:text-dark-primary mr-2">•</span>
                                  <span className="text-xs text-gray-600 dark:text-gray-300">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {node.techStack.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-1">
                              {node.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 md:px-4 py-1 md:py-1.5 bg-primary-200/40 dark:bg-dark-primary/20 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
