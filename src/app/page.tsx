"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Flavors from "@/components/Flavors"
import ProductContent from "@/components/ProductContent"
import ProductGallery from "@/components/ProductGallery"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()

    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen ${isMobile ? "p-0" : "p-8 max-w-7xl mx-auto"}`}
    >
      <div className={`flex flex-col md:flex-row ${isMobile ? "" : "gap-8 justify-center"}`}>
        <motion.div variants={itemVariants}>
          <ProductGallery />
        </motion.div>
        <div className="flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <ProductContent />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Flavors />
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
}
