import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contactItems = [
  { image: '/images/wave.jpg', info: 'Computer Science and GIS student at UW-Madison' },
  { image: '/images/hand.jpg', info: 'View Resume', link: 'Resume-Haiyue-Liu.pdf' },
  { image: '/images/face.jpg', info: 'GitHub: heyweol', link: 'https://github.com/heyweol' },
  { image: '/images/confidence.jpg', info: 'LinkedIn: Morgan Liu', link: 'https://www.linkedin.com/in/morgan-liu-b056b3262/' },
  { image: '/images/heart.jpg', info: 'Email: hliu746@wisc.edu', link: 'mailto:hliu746@wisc.edu' },
  { image: '/images/callme.jpg', info: 'Phone: 779-775-2283' },
];

const TextBubble = ({ info, link, position }: { info: string; link?: string; position: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, x: -10 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    exit={{ opacity: 0, scale: 0.8, x: -10 }}
    className="absolute top-1/2 left-full ml-2 p-2 bg-gray-800 text-white rounded-lg shadow-md text-sm z-30 w-48"
  >
    <div className="relative">
      <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-800" />
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
          {info}
        </a>
      ) : (
        info
      )}
    </div>
  </motion.div>
);

export function ContactCircle() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-[500px] h-[500px] mx-auto mb-20">
      {/* Central image */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image
          src="/images/twocats.png"
          alt="Morgan with cats"
          width={350}
          height={350}
          className="rounded-full"
        />
      </div>
      
      {/* Arcs */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
        {/* ... (arc code remains unchanged) ... */}
      </svg>

      {/* Contact items */}
      {contactItems.map((item, index) => {
        const angle = (index / contactItems.length) * 2 * Math.PI;
        const x = 200 * Math.cos(angle);
        const y = 200 * Math.sin(angle);
        
        // Determine bubble position based on avatar position
        const bubblePosition = index > contactItems.length / 2 ? 'right' : 'left';
        
        return (
          <motion.div
            key={index}
            className="absolute w-20 h-20 z-20"
            style={{
              x: x + 240,
              y: y + 240,
              translateX: '-50%',
              translateY: '-50%',
            }}
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Image
              src={item.image}
              alt={`Contact item ${index + 1}`}
              width={80}
              height={80}
              className="rounded-full transition-all duration-300 ease-in-out hover:shadow-lg"
            />
            <AnimatePresence>
              {hoveredIndex === index && (
                <TextBubble 
                  info={item.info} 
                  link={item.link} 
                  position={bubblePosition}
                />
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
