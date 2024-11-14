"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from "@/lib/utils"

const projectImages = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/CW2/Slide${i + 1}.JPG`,
  alt: `Spatial Analysis Slide ${i + 1}`
}))

export default function SpatialAnalysisProject() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-background/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <Link 
            href="/gis-portfolio" 
            className="text-base hover:text-primary inline-flex items-center"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">Spatial Analysis Project</h1>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={projectImages[selectedImage].src}
                    alt={projectImages[selectedImage].alt}
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2">
                  {projectImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        "relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all",
                        selectedImage === index 
                          ? "border-primary" 
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <Image
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
} 