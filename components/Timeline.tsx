"use client"

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button'; // Add this import
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Add this import
import { Chatbot } from '@/components/Chatbot'; // Add this import

const timelineEvents = [
  { 
    title: 'Started My Journey', 
    timeFrame: 'Sept. 2021', 
    description: 'University of Wisconsin-Madison, Madison, WI', 
    details: [
      'B.S. in Computer Science, and Cartography and Geographic Information Systems (3.7/4)',
      'Expected graduation: June 2026'
    ]
  },
  { 
    title: 'Research Assistant', 
    timeFrame: 'May 2023 - Present', 
    description: 'Spatial Computing and Data Mining Lab at UWM, Madison, WI', 
    details: [
      'Full stack developed an interactive dynamic map web application with functional API service handling users\' requests.',
      'Dominated website development and UI design, continuously upgrading website and services according to needs of the research team and USDA clients.',
      'Deployed machine learning models based on mass historical crop yield data and ran inference on cloud processing users\' selected ROIs.'
    ]
  },
  { 
    title: 'Software Development Intern', 
    timeFrame: 'May - Aug 2023', 
    description: 'ByteDance, Beijing, China', 
    details: [
      'Contributed to LLM development in China, and participated in data processing and dataset building.',
      'Worked on data collection by scraping, and ensured data quality through data cleaning, data fusion and data augmentation.'
    ]
  },
  { 
    title: 'USDA Crop Yield Prediction Website', 
    timeFrame: 'May 2023 - Present', 
    description: 'Full stack web development project', 
    details: [
      'Developed an interactive, dynamic website for geo-visualization of crop yield predictions.',
      'Used Vue.js to rebuild responsive and high-performance front-end.',
      'Deployed backend with RESTful API servers, allowing users to request data ad hoc and integrating deep learning models into the website.',
      'Managed an SQL database (PostgreSQL/MySQL) for dynamic data storage and retrieval.'
    ],
    projectUrl: 'https://heyweol.github.io/nifa-webdev/'
  },
  { 
    title: 'Fans\' Derivative Room Design Game ("Xinzhiju")', 
    timeFrame: 'May 2024 - Present', 
    description: 'Java-based cross-platform mini-game', 
    details: [
      'Developed an indie cross-platform mini-game with Java that allows players to extend room design experience from the original game, providing greater creative freedom.',
      'Adept at game development workflow with game engine FXGL. UI design and implementation with a common UI framework like JavaFX.',
      'Developed a community platform for users to register and share. Used a Postgres database managing users\' design.'
    ],

  },
  { 
    title: 'GitHub Issue Hound', 
    timeFrame: 'Sept. 2023 - May 2024', 
    description: 'AI-powered bug discovery and analysis tool', 
    details: [
      'Developed a system to automate bug discovery and analysis in GitHub repositories, increasing users\' contributions.',
      'Built a Retrieval-Augmented Generation (RAG) system using LangChain\'s Multi-Agent workflow and a vector database, demonstrating proficiency in designing and implementing LLM-driven applications.',
      'Implemented knowledge base management, enabling automated scraping and analysis of GitHub repositories to extract and assess project issues, files for bug identification.',
      'Incorporated advanced multi-step reasoning techniques to conduct issue analysis, improving the precision of bug detection and root cause identification.'
    ],

  },
];

// Update this constant to match the number of timeline events
const catImages = [
  { normal: '/images/2.png', expanded: '/images/1.png' },
  { normal: '/images/2.png', expanded: '/images/1.png' },
  { normal: '/images/2.png', expanded: '/images/1.png' },
  { normal: '/images/2.png', expanded: '/images/1.png' },
  { normal: '/images/2.png', expanded: '/images/1.png' },
  { normal: '/images/2.png', expanded: '/images/1.png' },
];

// Add a fallback image
const fallbackImage = '/images/cat-face-1.png';

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
    "isa.jpgng",
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
      {/* <Cat side="left" currentFocus={timelineEvents[activeIndex].title} expandedIndex={localExpandedIndex} faceImages={cat1Images} /> */}
      {/* <Cat side="right" currentFocus={timelineEvents[activeIndex].title} expandedIndex={localExpandedIndex} faceImages={cat2Images} /> */}
      
      <div className="space-y-40">
        {timelineEvents.map((event, index) => (
          <motion.div key={index} className="relative">
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
                src={
                  catImages[index] 
                    ? (localExpandedIndex === index ? catImages[index].expanded : catImages[index].normal)
                    : fallbackImage
                }
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
                        <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mb-4">
                          {event.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
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
                                  e.stopPropagation();
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
          className="p-6 rounded-lg max-w-sm mx-auto shadow-md"
        >
          <h2 className="text-2xl font-bold mb-3">Contact Me</h2>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Morgan(Haiyue) Liu</p>
            <p>
              <a href="mailto:hliu746@wisc.edu" className="hover:underline font-normal">hliu746@wisc.edu</a><br />
              <a href="mailto:haiyueliu746@gmail.com" className="hover:underline">haiyueliu746@gmail.com</a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> 779-775-2283
            </p>
            <div className="flex space-x-4 mt-3">
              
              {/* Add GitHub and LinkedIn icons here */}
              <div className="flex space-x-2">
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100" size={24} />
                </a>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200" size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Chatbot /> {/* Add the Chatbot component here */}
    </div>
  );
}