"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export default function RemoteSensingProject() {
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
          <h1 className="text-4xl font-bold mb-6">Remote Sensing Analysis</h1>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/more/Slide1.JPG"
                    alt="Remote Sensing Analysis"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
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