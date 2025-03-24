"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Flavors from "@/components/Flavors"
import ProductContent from "@/components/ProductContent"
import ProductGallery from "@/components/ProductGallery"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Page() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen w-full px-4 sm:px-6 md:px-8 max-w-[1440px] mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        <motion.div variants={itemVariants} className="w-full md:w-1/2 lg:w-3/5">
          <ProductGallery />
        </motion.div>
        <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2 lg:w-2/5">
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