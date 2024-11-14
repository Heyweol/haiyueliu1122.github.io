"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from "@/lib/utils"

export default function GISPortfolio() {
  const [showFullIntro, setShowFullIntro] = useState(false)
  const [selectedStudentWork, setSelectedStudentWork] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedAnalysisContent, setSelectedAnalysisContent] = useState(0)
  const [selectedWebsiteImage, setSelectedWebsiteImage] = useState(0)

  const studentWorkDetails = [
    {
      id: 1,
      title: "NYC Crime Analysis",
      timeFrame: "Fall 2023",
      description: "Comprehensive spatial analysis of crime patterns in New York City",
      details: [
     ],
      image: "/images/nyc-crime/1.kernel density 2023.png",
      expandedImage: "/images/nyc-crime/5.hot spot similarity.png"
    },
    {
      id: 2,
      title: "Spatial Analysis Project",
      timeFrame: "Fall 2023",
      description: "Advanced spatial analysis techniques and visualization",
      details: [

      ],
      image: "/images/CW2/tn.png",
      expandedImage: "/images/CW2/Slide1.JPG"
    },
    {
      id: 3,
      title: "Remote Sensing Analysis",
      timeFrame: "Summer 2023",
      description: "Satellite imagery analysis and land use classification",
      details: [

      ],
      image: "/images/more/tn1.png",
      expandedImage: "/images/more/Slide1.JPG"
    }
  ]

  const analysisContent = [
    {
      type: 'text',
      content: (
        <p className="text-muted-foreground space-y-4">
          <span className="block mb-4">
            As an experienced geospatial data analyst, I conducted comprehensive GIS analysis and created detailed reports for a law firm, examining geographic restrictions affecting home purchases for Asian residents in Florida under SB264.
          </span>
          <span className="block mb-4">
            My responsibilities included collecting geographic data, analyzing buffer zones around restricted areas, creating illustrative maps, and drawing reliable conclusions. The analysis revealed significant reductions in available land for individuals targeted by the bill.
          </span>
          <span className="block">
            This report provided crucial insights into SB264&apos;s effects and served as key evidence in the firm&apos;s appeal process.
          </span>
        </p>
      ),
    },
    {
      type: 'image',
      content: '/images/gis-page-florida1.png',
      thumbnail: '/images/gis-page-florida1.png'
    },
    {
      type: 'image',
      content: '/images/gis-page-florida2.png',
      thumbnail: '/images/gis-page-florida2.png'
    },
    {
      type: 'image',
      content: '/images/gis-page-florida3.png',
      thumbnail: '/images/gis-page-florida3.png'
    }
  ]

  const websiteContent = [
    {
      type: 'image',
      content: '/images/gis-page-usda1.png',
      thumbnail: '/images/gis-page-usda1.png',
      description: 'This is the interactive geo-visualization website sponsored by USDA.'
    },
    {
      type: 'image',
      content: '/images/gis-page-usda2.png',
      thumbnail: '/images/gis-page-usda2.png',
      description: 'Allow user run machine learning model online'
    },
    {
      type: 'image',
      content: '/images/gis-page-usda3.png',
      thumbnail: '/images/gis-page-usda3.png',
      description: 'An intuitively clear color design for map'
    },
    {
      type: 'video',
      content: '/video/gis-page-1.mp4',
      thumbnail: '/images/gis-page-usda1.png',
      description: 'Download map and users can design based on their preference'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-background/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <Link 
            href="/" 
            className="text-base hover:text-primary inline-flex items-center"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>
      
      <main>
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-8">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />
          
          <Image
            src="/images/gis-page-bg1.png"
            alt="Background Image"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover"
            priority
          />

          <div className="absolute inset-0 z-20">
            <div className="container mx-auto px-4 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center"
              >
                <div className="flex items-start gap-8">
                  <div className="relative shrink-0">
                    <Image
                      src="/images/gis-page-avatar.png"
                      alt="Morgan's Avatar"
                      width={75}
                      height={75}
                      className="rounded-full cursor-pointer hover:ring-2 hover:ring-white transition-all shadow-lg"
                      onClick={() => setShowFullIntro(!showFullIntro)}
                    />
                  </div>
                  
                  <motion.div className="flex flex-col gap-4 flex-1">
                    <h1 className="text-4xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                      GIS Portfolio
                    </h1>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="prose dark:prose-invert w-full"
                    >
                      <p className="text-xl font-medium leading-relaxed">
                        Hi, this is Morgan! 👋 Welcome to my portfolio!
                      </p>
                      <AnimatePresence mode="wait">
                        {showFullIntro && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-4 mt-4"
                          >
                            <p className="leading-relaxed">
                              I major in Computer Science, and Cartography & Geographic Information Systems at University of Wisconsin-Madison in my junior year.
                            </p>
                            <p className="leading-relaxed">
                              I am a Research Assistant at the Spatial Computing and Data Mining Lab in UWM Geography Department, where I analyze satellite imagery of central crop areas, manage cloud-based databases, and build machine learning models for crop yield predictions and geographic variation analysis.
                            </p>
                            <p className="leading-relaxed">
                              As an experienced geospatial data analyst, I have also conducted comprehensive GIS analysis and created illustrative reports for a law firm, highlighting geographic restrictions impacting home purchases for Asian residents in Florida under SB264. And my findings that became key evidence in their appeal.
                            </p>
                            <p className="leading-relaxed">
                              With my programming background, I also expertise in developing interactive online geo-visualization platforms.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowFullIntro(!showFullIntro)}
                        className="mt-4 hover:bg-primary/10"
                      >
                        {showFullIntro ? 'Show Less ↑' : 'Read More ↓'}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Paid Work</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">GIS Work Website</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Live Preview</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsExpanded(!isExpanded)}
                      >
                        {isExpanded ? 'Collapse ↑' : 'Expand ↓'}
                      </Button>
                    </div>
                    <div className={`relative w-full mb-2 transition-all duration-300 ease-in-out ${
                      isExpanded ? 'h-[80vh]' : 'aspect-video'
                    }`}>
                      <iframe
                        src="https://heyweol.github.io/nifa-webdev"
                        className="absolute top-0 left-0 w-full h-full rounded-lg border border-border"
                        allow="fullscreen"
                      />
                    </div>
                    <a 
                      href="https://heyweol.github.io/nifa-webdev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Open website in new tab →
                    </a>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4">Project Highlights</h4>
                    <div className="space-y-4">
                      <div className="relative aspect-video w-full mb-4">
                        {websiteContent[selectedWebsiteImage].type === 'video' ? (
                          <video
                            src={websiteContent[selectedWebsiteImage].content}
                            controls
                            className="w-full h-full rounded-lg border border-border"
                          />
                        ) : (
                          <Image
                            src={websiteContent[selectedWebsiteImage].content}
                            alt={`USDA Website ${selectedWebsiteImage}`}
                            fill
                            className="object-contain rounded-lg border border-border"
                          />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {websiteContent[selectedWebsiteImage].description}
                      </p>
                      
                      <div className="flex gap-2">
                        {websiteContent.map((content, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedWebsiteImage(index)}
                            className={cn(
                              "relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                              selectedWebsiteImage === index 
                                ? "border-primary" 
                                : "border-border hover:border-primary/50"
                            )}
                          >
                            <Image
                              src={content.thumbnail}
                              alt={`USDA Website thumbnail ${index}`}
                              fill
                              className="object-cover"
                            />
                            {content.type === 'video' && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="white"
                                  className="w-8 h-8"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286l-11.54 6.347c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">GIS Analysis</h3>
                  <div className="relative h-[400px]">
                    <div className="absolute inset-0 overflow-y-auto">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="mb-4">
                          <Image
                            src={`/images/gis-report-preview${num}.jpg`}
                            alt={`Report preview ${num}`}
                            width={600}
                            height={800}
                            className="w-full rounded-lg border border-border"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Analysis Overview</h3>
                  <div className="mb-6">
                    {selectedAnalysisContent === 0 ? (
                      analysisContent[0].content
                    ) : (
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={analysisContent[selectedAnalysisContent].content}
                          alt={`Florida GIS Analysis ${selectedAnalysisContent}`}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    {analysisContent.map((content, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedAnalysisContent(index)}
                        className={cn(
                          "relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                          selectedAnalysisContent === index 
                            ? "border-primary" 
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        {content.type === 'text' ? (
                          <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              className="w-6 h-6 mb-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                              />
                            </svg>
                            <span className="text-xs font-medium">Overview</span>
                          </div>
                        ) : (
                          <Image
                            src={content.thumbnail}
                            alt={`Florida GIS Analysis ${index}`}
                            fill
                            className="object-cover"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Student Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentWorkDetails.map((work) => (
              <Link href={`/gis-portfolio/projects/${work.id}`} key={work.id}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src={work.image}
                      alt={work.title}
                      width={300}
                      height={200}
                      className="w-full rounded-lg mb-4"
                    />
                    <h3 className="font-semibold">{work.title}</h3>
                    <p className="text-sm text-muted-foreground">{work.timeFrame}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}