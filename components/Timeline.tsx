"use client"

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button'; // Add this import
import { Cat } from "@/components/Cat";
import Image from 'next/image';

const timelineEvents = [
  { title: 'Started My Journey', timeFrame: '2020', description: 'Began learning web development', details: 'Enrolled in online courses and started building small projects to gain hands-on experience.' },
  { title: 'First Project', timeFrame: '2021', description: 'Completed my first full-stack application', details: 'Developed a MERN stack application, overcoming challenges in state management and API integration.', projectUrl: 'https://heyweol.github.io/nifa-webdev' },
  { title: 'Career Switch', timeFrame: '2022', description: 'Transitioned to a full-time developer role', details: 'Joined a tech startup as a junior developer, working on real-world projects and collaborating with experienced developers.' },
  { title: 'Continuous Learning', timeFrame: '2023', description: 'Mastered React and Next.js', details: 'Deepened knowledge in modern web technologies, contributing to open-source projects and mentoring junior developers.' },
];

// Add this new constant for cat images
const catImages = [
  { normal: '/images/cat-face-1.png', expanded: '/images/cat-face-3.png' },
  { normal: '/images/cat-face-1.png', expanded: '/images/cat-face-2.png' },
  { normal: '/images/cat-face-1.png', expanded: '/images/cat-face-2.png' },
  { normal: '/images/cat-face-1.png', expanded: '/images/cat-face-2.png' },
];

export function Timeline({ setCurrentFocus, setExpandedIndex }) {
  const containerRef = useRef(null);
  const revealRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [localExpandedIndex, setLocalExpandedIndex] = useState<number | null>(null); // Local state
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,  // Increased from 100
    damping: 20,     // Decreased from 30
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
      // Clamp the value between 0 and 1
      const clampedValue = Math.max(0, Math.min(1, v));
      // Adjust index calculation to ensure first and last cards can be highlighted
      const index = Math.round(clampedValue * (timelineEvents.length - 1));
      setActiveIndex(index);
      setCurrentFocus(timelineEvents[index].title);
    });

    return () => unsubscribe();
  }, [smoothProgress, setCurrentFocus]);

  const handleCardClick = (index) => {
    const newIndex = localExpandedIndex === index ? null : index;
    setLocalExpandedIndex(newIndex);
    if (setExpandedIndex) {
      setExpandedIndex(newIndex);
    }
  };

  const cat1Images = [
    "cat-face-1.png",
    "cat-face-2.png",
    "cat-face-3.png",
    "cat-face-4.png"
  ];

  const cat2Images = [
    "cat-face-1.png",
    "cat-face-2.png",
    "cat-face-3.png",
    "cat-face-4.png"
  ];

  return (
    <div ref={containerRef} className="relative mx-auto py-20">
      {/* Pass the same expandedIndex to both Cat components */}
      <Cat side="left" currentFocus={timelineEvents[activeIndex].title} expandedIndex={localExpandedIndex} faceImages={cat1Images} />
      <Cat side="right" currentFocus={timelineEvents[activeIndex].title} expandedIndex={localExpandedIndex} faceImages={cat2Images} />
      
      <div className="space-y-40">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="absolute left-0 top-6 w-12 h-12 transform -translate-x-1/2"
              style={{
                scale: useTransform(
                  smoothProgress,
                  [index / timelineEvents.length, (index + 1) / timelineEvents.length],
                  [0.8, 1.2]
                )
              }}
            >
              <Image
                src={localExpandedIndex === index ? catImages[index].expanded : catImages[index].normal}
                alt="Cat icon"
                width={48}
                height={48}
                className="rounded-full"
              />
            </motion.div>
            
            <motion.div
              style={{
                scale: useTransform(
                  smoothProgress,
                  [
                    (index - 0.2) / timelineEvents.length,
                    index / timelineEvents.length,
                    (index + 0.2) / timelineEvents.length
                  ],
                  [0.97, 1, 0.97]
                ),
                opacity: 1
              }}
            >
              <Card 
                className={`ml-16 p-6 transition-all duration-300 cursor-pointer
                  ${activeIndex === index || localExpandedIndex === index ? 'shadow-lg ring-2 ring-primary' : ''}
                `}
                onClick={() => handleCardClick(index)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <h4 className="text-xl font-medium mb-2">{event.timeFrame}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                  <AnimatePresence>
                    {localExpandedIndex === index && (
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
        ))}
      </div>

      <div className="mt-40 pt-20 border-t border-gray-200 dark:border-gray-700">
        <motion.div
          ref={revealRef}
          style={{
            backgroundColor,
            color: textColor,
          }}
          className="p-8 rounded-lg max-w-md mx-auto"
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