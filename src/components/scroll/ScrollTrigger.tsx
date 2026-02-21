import { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  onEnter?: () => void;
  onExit?: () => void;
  threshold?: number;
  rootMargin?: string;
}

export default function ScrollTrigger({ 
  children, 
  onEnter, 
  onExit, 
  threshold = 0.1,
  rootMargin = '0px'
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          onEnter?.();
        } else if (!entry.isIntersecting && isVisible) {
          setIsVisible(false);
          onExit?.();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [onEnter, onExit, threshold, rootMargin, isVisible]);

  return (
    <div ref={ref} className="scroll-trigger">
      {children}
    </div>
  );
}
