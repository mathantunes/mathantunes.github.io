import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CareerNode {
  title: string;
  company: string;
  period: string;
  description: string;
  start: number | string; // Year when this role started
  isFork?: boolean;
  isConvergence?: boolean;
}

const careerData: CareerNode[] = [
  {
    title: 'Software Analyst',
    company: 'Alstom',
    period: '2017 - 2020',
    description: 'Started career in software analysis and development',
    start: 2017
  },
  {
    title: 'Software Engineer',
    company: 'BTG Pactual',
    period: '2020 - 2021',
    description: 'Developed financial software solutions',
    start: 2020
  },
  {
    title: 'Fullstack Software Engineer',
    company: 'Loanboox',
    period: '2021 - 2023',
    description: 'Built fullstack applications for fintech industry',
    start: 2021
  },
  {
    title: 'Senior Fullstack Engineer',
    company: 'Valora',
    period: '2023 - Present',
    description: 'Leading fullstack development for retail solutions',
    start: 2023
  },
  {
    title: 'Co-Founder',
    company: 'JAMTech',
    period: '2024 - Present',
    description: 'Building innovative tech solutions',
    start: 2024,
    isFork: true
  },
  {
    title: 'Present',
    company: 'Current Roles',
    period: '2026',
    description: 'Actively contributing to both Valora and JAMTech',
    start: "Present",
  }
];

export default function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || hasPlayed) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if timeline is in view and user hasn't scrolled past it
      const isCentered = rect.top <= windowHeight / 3 && rect.bottom >= windowHeight / 2;
      const userScrolledPast = rect.top < 0;

      // Only activate if timeline is centered and user hasn't scrolled past it
      if (isCentered && !userScrolledPast && !isLocked) {
        setIsLocked(true);

        // Lock scroll position
        const scrollPosition = window.scrollY;
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, scrollPosition);

        // Track scroll wheel movement for animation
        let accumulatedDelta = 0;
        const maxDelta = 1000; // Total scroll distance needed

        const handleWheel = (e: Event) => {
          e.preventDefault();
          const wheelEvent = e as WheelEvent;
          accumulatedDelta += wheelEvent.deltaY;

          // Allow escape by scrolling up significantly
          if (accumulatedDelta < -200) {
            setIsLocked(false);
            document.body.style.overflow = '';
            window.removeEventListener('wheel', handleWheel);
            window.scrollBy(0, accumulatedDelta);
            return;
          }

          // Map scroll delta to progress (0 to 1)
          const newProgress = Math.max(0, Math.min(1, accumulatedDelta / maxDelta));
          setScrollProgress(newProgress);

          // Unlock when animation is complete
          if (newProgress >= 1) {
            setIsLocked(false);
            setHasPlayed(true);
            document.body.style.overflow = '';
            window.removeEventListener('wheel', handleWheel);
          }
        };

        // Add wheel event listener
        window.addEventListener('wheel', handleWheel);

        return () => {
          window.removeEventListener('wheel', handleWheel);
        };
      }

      // If user has already scrolled past the timeline, mark as played
      if (userScrolledPast && !hasPlayed) {
        setHasPlayed(true);
        setScrollProgress(1);
      }
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLocked, hasPlayed]);

  return (
    <div ref={containerRef} className="relative py-40 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Career Journey
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative h-32 md:h-48 mb-16">
          {/* Main Timeline Line */}
          <div className="absolute top-2/3 md:top-2/3 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700" />

          {/* Fork Timeline Line - Only from fork point onwards */}
          <div
            className="absolute h-1 bg-gray-200 dark:bg-gray-700"
            style={{
              top: '33.333%',
              left: `${(careerData.findIndex(node => node.isFork) / (careerData.length - 1)) * 100}%`,
              width: `${((careerData.length - 1 - careerData.findIndex(node => node.isFork)) / (careerData.length - 1)) * 100}%`
            }}
          />

          {/* Fork Connection Line - Vertical */}
          <div
            className="absolute w-0.5 bg-gray-200 dark:bg-gray-700"
            style={{
              left: `${(careerData.findIndex(node => node.isFork) / (careerData.length - 1)) * 100}%`,
              top: '33.333%',
              height: '33.333%'
            }}
          />

          {/* Year Markers - Main Timeline */}
          <div className="absolute top-2/3 left-0 right-0 flex justify-between px-2 md:px-4">
            {careerData.map((node, index) => {
              const nodePosition = index / (careerData.length - 1);

              return (
                <div
                  key={`main-${node.start}`}
                  className="relative"
                  style={{
                    position: 'absolute',
                    left: `${nodePosition * 100}%`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full" />
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {node.start}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Year Markers - Fork Timeline (only from fork point) */}
          <div className="absolute top-1/3 left-0 right-0 flex justify-between px-2 md:px-4">
            {careerData.filter(node => node.isFork || node.start === 'Present').map((node) => {
              const forkIndex = careerData.findIndex(n => n === node);
              const nodePosition = forkIndex / (careerData.length - 1);
              const isActive = scrollProgress >= nodePosition;

              return (
                <div
                  key={`fork-${node.start}`}
                  className="relative"
                  style={{
                    position: 'absolute',
                    left: `${nodePosition * 100}%`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-primary-500 dark:bg-dark-primary' : 'bg-gray-300 dark:bg-gray-600'
                    }`} />

                </div>
              );
            })}
          </div>

          {/* Moving Progress Line - Main Timeline */}
          <motion.div
            style={{
              width: `${scrollProgress * 100}%`,
              top: '66.666%'
            }}
            className="absolute left-0 h-1 bg-primary-500 origin-left transition-all duration-100"
          />

          {/* Moving Progress Line - Fork Timeline */}
          <motion.div
            style={{
              width: `${scrollProgress >= (careerData.findIndex(node => node.isFork) / (careerData.length - 1)) ? ((scrollProgress - (careerData.findIndex(node => node.isFork) / (careerData.length - 1))) / ((careerData.length - 1 - careerData.findIndex(node => node.isFork)) / (careerData.length - 1))) * ((careerData.length - 1 - careerData.findIndex(node => node.isFork)) / (careerData.length - 1)) * 100 : 0}%`,
              top: '33.333%',
              left: `${(careerData.findIndex(node => node.isFork) / (careerData.length - 1)) * 100}%`,
              opacity: scrollProgress >= (careerData.findIndex(node => node.isFork) / (careerData.length - 1)) && scrollProgress <= 1 ? 1 : 0
            }}
            className="absolute h-1 bg-primary-500 origin-left transition-all duration-100"
          />

          {/* Mobile Info Panel - Only show when node is active and timeline is locked */}
          {isLocked && (() => {
            const activeNode = careerData.find((_, index) => {
              const nodePosition = index / (careerData.length - 1);
              return scrollProgress >= nodePosition && scrollProgress - nodePosition < 0.15;
            });
            
            if (!activeNode) return null;
            
            return (
              <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-64 text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg md:hidden z-50">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {activeNode.title}
                </h3>
                <p className="text-primary-500 dark:text-dark-primary text-xs font-medium mb-1">
                  {activeNode.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {activeNode.period}
                </p>
                {activeNode.description && (
                  <p className="text-gray-600 dark:text-gray-300 text-xs mt-2">
                    {activeNode.description}
                  </p>
                )}
              </div>
            );
          })()}

          {/* Career Nodes */}
          <div className="relative h-full flex items-center justify-between px-2 md:px-4">
            {careerData.map((node, index) => {
              const nodePosition = index / (careerData.length - 1);
              const isActive = scrollProgress >= nodePosition;
              const scale = isActive ? 1 : 0;
              const opacity = scrollProgress >= nodePosition - 0.02 && scrollProgress <= nodePosition + 0.02 ? 1 : (isActive ? 1 : 0);
              const isForkNode = node.isFork;

              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    position: 'absolute',
                    left: `${nodePosition * 100}%`,
                    transform: 'translateX(-50%)',
                    top: isForkNode ? '33.333%' : '66.666%'
                  }}
                >
                  {/* Node */}
                  <motion.div
                    style={{
                      scale,
                      opacity,
                      transition: 'all 0.3s ease-out'
                    }}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-white dark:border-gray-900 z-10 ${'bg-primary-500 dark:bg-dark-primary'
                      }`}
                  />

                  {/* Fork Node Content - Desktop version */}
                  {isForkNode && (
                    <motion.div
                      style={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? -80 : -100,
                        transition: 'all 0.3s ease-out'
                      }}
                      className="absolute w-32 md:w-48 text-center left-1/2 -translate-x-1/2 top-0 hidden md:block"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {node.title}
                      </h3>
                      <p className="text-primary-500 dark:text-dark-primary text-xs font-medium">
                        {node.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        {node.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                        {node.description}
                      </p>
                    </motion.div>
                  )}

                  {/* Main Node Content - Desktop version */}
                  {!isForkNode && node.start !== 'Present' && (
                    <motion.div
                      style={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 20 : 40,
                        transition: 'all 0.3s ease-out'
                      }}
                      className="absolute w-32 md:w-48 text-center left-1/2 -translate-x-1/2 top-12 hidden md:block"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {node.title}
                      </h3>
                      <p className="text-primary-500 dark:text-dark-primary text-xs font-medium">
                        {node.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        {node.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                        {node.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
