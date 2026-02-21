import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  tags: Array<{ text: string; color: string }>;
}

interface Props {
  project: Project;
  index: number;
}

const getTagColorClass = (color: string): string => {
  const colorMap: Record<string, string> = {
    primary: 'bg-primary-100 dark:bg-gray-700 text-primary-700 dark:text-primary-300',
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
    red: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
    gray: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300',
  };
  return colorMap[color] || colorMap.gray;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColorClass(tag.color)}`}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {project.description}
      </p>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Highlights:</h4>
        <ul className="space-y-2">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-primary-500 dark:text-dark-primary mr-2">•</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
