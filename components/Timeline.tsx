"use client"

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button'; // Add this import
import { useInView } from 'react-intersection-observer';

const timelineEvents = [
  { year: 2020, title: 'Started My Journey', description: 'Began learning web development', details: 'Enrolled in online courses and started building small projects to gain hands-on experience.' },
  { year: 2021, title: 'First Project', description: 'Completed my first full-stack application', details: 'Developed a MERN stack application, overcoming challenges in state management and API integration.', projectUrl: 'https://heyweol.github.io/nifa-webdev' },
  { year: 2022, title: 'Career Switch', description: 'Transitioned to a full-time developer role', details: 'Joined a tech startup as a junior developer, working on real-world projects and collaborating with experienced developers.' },
  { year: 2023, title: 'Continuous Learning', description: 'Mastered React and Next.js', details: 'Deepened knowledge in modern web technologies, contributing to open-source projects and mentoring junior developers.' },
];

export function Timeline({ setCurrentFocus }) {
  const containerRef = useRef(null);
  const revealRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001
  });

  const revealProgress = useScroll({
    target: revealRef,
    offset: ["start end", "end start"]
  });

  const backgroundColor = useTransform(
    revealProgress.scrollYProgress,
    [0, 1],
    ["hsl(var(--background))", "hsl(var(--foreground))"]
  );

  const textColor = useTransform(
    revealProgress.scrollYProgress,
    [0, 1],
    ["hsl(var(--foreground))", "hsl(var(--background))"]
  );

  useEffect(() => {
    const unsubscribe = smoothProgress.onChange(v => {
      const index = Math.min(Math.floor(v * timelineEvents.length), timelineEvents.length - 1);
      setActiveIndex(index);
      setCurrentFocus(timelineEvents[index].title);
    });

    return () => unsubscribe();
  }, [smoothProgress, setCurrentFocus]);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div ref={containerRef} className="relative mx-auto py-20">
      <motion.div
        className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"
        style={{ scaleY: smoothProgress }}
      />
      
      <div className="space-y-40">
        {timelineEvents.map((event, index) => {
          const [ref, inView] = useInView({
            threshold: 0.5,
            triggerOnce: false
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: inView ? 1 : 0.6, 
                y: 0, 
                scale: inView ? 1 : 0.95 
              }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div
                style={{
                  scale: useTransform(
                    smoothProgress,
                    [
                      (index - 0.5) / timelineEvents.length,
                      index / timelineEvents.length,
                      (index + 0.5) / timelineEvents.length
                    ],
                    [0.9, 1, 0.9]
                  ),
                  opacity: useTransform(
                    smoothProgress,
                    [
                      (index - 0.5) / timelineEvents.length,
                      index / timelineEvents.length,
                      (index + 0.5) / timelineEvents.length
                    ],
                    [0.6, 1, 0.6]
                  )
                }}
              >
                <Card 
                  className={`ml-12 p-6 transition-all duration-300 cursor-pointer
                    ${inView ? 'shadow-lg ring-2 ring-primary' : ''}
                  `}
                  onClick={() => handleCardClick(index)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <h3 className="text-2xl font-semibold mb-2">{event.year}</h3>
                    <h4 className="text-xl font-medium mb-2">{event.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            {event.details}
                          </p>
                          {event.projectUrl && (
                            <>
                              <div className="mt-4 aspect-video w-full">
                                <iframe
                                  src={event.projectUrl}
                                  className="w-full h-full border-0 rounded-md"
                                  title={`Project: ${event.title}`}
                                  allowFullScreen
                                />
                              </div>
                              <div className="mt-4 text-center">
                                <Button
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent card from collapsing
                                    window.open(event.projectUrl, '_blank');
                                  }}
                                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                  Open the Project Site
                                </Button>
                              </div>
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-40 pt-20 border-t border-gray-200 dark:border-gray-700">
        <motion.div
          ref={revealRef}
          style={{
            backgroundColor,
            color: textColor,
          }}
          className="p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Contact me</h2>
          <p className="text-xl mb-6">Email: example@example.com</p>
          <p className="text-xl mb-6">Phone: 123-456-7890</p>
          <p className="text-xl mb-6">LinkedIn: linkedin.com/in/example</p>
          <p className="text-xl mb-6">GitHub: github.com/example</p>
        </motion.div>
      </div>
    </div>
  );
}