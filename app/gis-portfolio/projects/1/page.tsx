"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from "@/lib/utils"

// We'll store images statically to ensure compatibility with static rendering
const projectImages = [
  {
    src: '/images/nyc-crime/1.kernel density 2023.png',
    alt: 'Kernel Density Analysis of NYC Crime (2023)'
  },
  {
    src: '/images/nyc-crime/2.kernel density 2024.png',
    alt: 'Kernel Density Analysis of NYC Crime (2024)'
  },
  {
    src: '/images/nyc-crime/3.hot spot 2023.png',
    alt: 'Crime Hot Spot Analysis (2023)'
  },
  {
    src: '/images/nyc-crime/4.hot spot 2024.png',
    alt: 'Crime Hot Spot Analysis (2024)'
  },
  {
    src: '/images/nyc-crime/5.hot spot similarity.png',
    alt: 'Hot Spot Pattern Similarity Analysis'
  },
  {
    src: '/images/nyc-crime/6.hot spot change.png',
    alt: 'Hot Spot Pattern Change Analysis'
  },
  {
    src: '/images/nyc-crime/7.OLS.png',
    alt: 'Ordinary Least Squares Regression Analysis'
  },
  {
    src: '/images/nyc-crime/8.GWR.png',
    alt: 'Geographically Weighted Regression Analysis'
  },
  {
    src: '/images/nyc-crime/9.MGWR.png',
    alt: 'Multiscale Geographically Weighted Regression'
  },
  {
    src: '/images/nyc-crime/10.population density.png',
    alt: 'Population Density Distribution'
  },
  {
    src: '/images/nyc-crime/11.House density.png',
    alt: 'Housing Density Distribution'
  },
  {
    src: '/images/nyc-crime/12.poverty density.png',
    alt: 'Poverty Density Distribution'
  },
  {
    src: '/images/nyc-crime/13.unemployment.png',
    alt: 'Unemployment Distribution'
  },
  {
    src: '/images/nyc-crime/14.education density.png',
    alt: 'Education Level Distribution'
  },
  {
    src: '/images/nyc-crime/15.high risk.png',
    alt: 'High Risk Areas Analysis'
  }
]

export default function NYCCrimeProject() {
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
          <h1 className="text-4xl font-bold mb-6">NYC Crime Analysis</h1>
          
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

      <footer className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link 
            href="/gis-portfolio" 
            className="text-base hover:text-primary inline-flex items-center"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  )
}
