"use client"

import { useState, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { Cat as CatIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";


interface CatProps {
  side: string;
  currentFocus: string;
  expandedIndex: number | null;
  faceImages: string[]; // Add this prop
}

export function Cat({ side, currentFocus, expandedIndex, faceImages }: CatProps) {
  // Ensure expandedIndex is within the valid range
  const isValidIndex = expandedIndex !== null && expandedIndex >= 0 && expandedIndex < faceImages.length;
  const currentCatImage = isValidIndex ? faceImages[expandedIndex] : "cat-face-1.png";

  const [isOpen, setIsOpen] = useState(false);
  const dragControls = useDragControls();
  const wasDragged = useRef(false);

  const catDescriptions = {
    "Started My Journey": "Meow! I remember when you started coding. So many late nights!",
    "First Project": "Purr... Your first project was as exciting as chasing a laser pointer!",
    "Career Switch": "Meow meow! Big changes, but you adapted like a cat to a new home.",
    "Continuous Learning": "Purr... Always learning, just like I'm always napping!"
  };

  const handleClick = () => {
    if (!wasDragged.current) {
      setIsOpen(true);
    }
    // Reset the flag after a short delay
    setTimeout(() => {
      wasDragged.current = false;
    }, 100);
  };

  return (
    <motion.div
      className={`fixed ${side === 'left' ? 'left-4' : 'right-4'} ${side === 'left' ? 'top-1/4' : 'top-3/4'} z-10`}
      drag
      dragControls={dragControls}
      whileDrag={{ scale: 1.1 }}
      dragMomentum={false}
      onDragStart={() => {
        wasDragged.current = true;
      }}
    >
      <motion.div
        className={`cursor-pointer`}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        onPointerDown={(e) => {
          e.stopPropagation();
          dragControls.start(e);
        }}
      >
        <div className={`cat-walk-${side}`}>
          <img src={`/images/${currentCatImage}`} alt="Cat Face" className="w-12 h-12 md:w-16 md:h-16" />
        </div>
      </motion.div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cat's Thoughts</DialogTitle>
            <DialogDescription>
              {catDescriptions[currentFocus as keyof typeof catDescriptions] || "Meow! I'm just a cat, what do I know?"}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}