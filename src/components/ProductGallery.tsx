"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [direction, setDirection] = useState(0)

  const images = [
    {
      src: "/MintChocolate.png",
      alt: "Night Time Superfoods Mint Chocolate with Free Bottle",
    },
    {
      src: "/hot.png",
      alt: "Thumbnail 2",
    },
    {
      src: "/chai.png",
      alt: "Thumbnail 3",
    },
    {
      src: "/sleepy.png",
      alt: "Thumbnail 4",
    },
    {
      src: "/rose.png",
      alt: "Thumbnail 5",
    },
  ]

  const handlePrevious = () => {
    setDirection(-1)
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index: number) => {
    setDirection(index > selectedImage ? 1 : -1)
    setSelectedImage(index)
  }

  const mainImageVariants = {
    initial: (direction: number) => ({
      x: direction * 300,
      opacity: 0,
      scale: 0.8,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction * -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  }

  const thumbnailVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
      },
    }),
    hover: {
      y: -5,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    selected: {
      scale: 1.05,
    },
  }

  return (
    <div className="flex flex-col w-full items-center">
      {/* Full-width container for mobile */}
      <div className="w-screen md:w-full relative -mx-4 md:mx-0">
        <div className="relative bg-[#E8E8E8] overflow-hidden w-full h-[400px] sm:h-[450px] md:h-[450px] lg:h-[518.78px] md:rounded-lg">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={selectedImage}
              custom={direction}
              variants={mainImageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x
                if (swipe < -100) {
                  handleNext()
                } else if (swipe > 100) {
                  handlePrevious()
                }
              }}
            >
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
            <motion.button
              className="pointer-events-auto p-3"
              onClick={handlePrevious}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width="18.23"
                height="26"
                viewBox="0 0 18 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "rotate(180deg)" }}
              >
                <path
                  d="M3.5 2L14.5 13L3.5 24"
                  stroke="#5D5CB6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
            <motion.button
              className="pointer-events-auto p-3"
              onClick={handleNext}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="18.23" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.5 2L14.5 13L3.5 24"
                  stroke="#5D5CB6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>

          {/* Image counter */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {selectedImage + 1} / {images.length}
          </motion.div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-1 sm:gap-2 mt-4 w-full md:w-auto md:max-w-[667px] px-4 md:px-0">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`
              w-[40px] h-[40px]
              sm:w-[50px] sm:h-[50px]
              md:w-[60px] md:h-[60px]
              lg:w-[72.3px] lg:h-[70px]
              rounded-[8px] md:rounded-[11.48px]
              ${selectedImage === index ? "border-2 border-[#5D5CB6]" : "border border-transparent"}
              bg-white overflow-hidden
            `}
            variants={thumbnailVariants}
            initial="initial"
            animate={selectedImage === index ? ["animate", "selected"] : "animate"} // ✅ FIXED LINE
            whileHover="hover"
            custom={index}
          >
            <motion.div className="relative w-full h-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              {selectedImage === index && (
                <motion.div
                  className="absolute inset-0 bg-[#5D5CB6]/5"
                  layoutId="selected-overlay"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
