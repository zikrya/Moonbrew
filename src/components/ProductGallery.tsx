"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()

    window.addEventListener("resize", checkIfMobile)

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const images = [
    {
      src: "/MintChocolate.png",
      alt: "Night Time Superfoods Mint Chocolate with Free Bottle",
    },
    {
      src: "/placeholder.svg?height=70&width=72",
      alt: "Thumbnail 2",
    },
    {
      src: "/placeholder.svg?height=70&width=72",
      alt: "Thumbnail 3",
    },
    {
      src: "/placeholder.svg?height=70&width=72",
      alt: "Thumbnail 4",
    },
    {
      src: "/placeholder.svg?height=70&width=72",
      alt: "Thumbnail 5",
    },
    {
      src: "/placeholder.svg?height=70&width=72",
      alt: "Thumbnail 6",
    },
  ]

  return (
    <div className={`flex flex-col ${isMobile ? "w-full" : "items-center"}`}>
      <div
        className={`relative bg-[#E8E8E8] overflow-hidden ${
          isMobile ? "w-full h-[300px] rounded-none" : "w-[667px] h-[518.78px] mb-4 rounded-lg"
        }`}
      >
        <Image
          src={images[selectedImage].src || "/placeholder.svg"}
          alt={images[selectedImage].alt}
          fill
          className="object-contain"
          priority
        />
        <div className="absolute top-4 right-4">
          <div className="relative">
            {isMobile && (
              <div className="bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-full">FREE BOTTLE</div>
            )}
          </div>
        </div>
      </div>

      {isMobile ? (
        <div className="flex justify-center gap-2 mt-2 mb-2 bg-gray-100 py-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-[40px] h-[40px] rounded-[8px] border border-gray-300 bg-white ${
                selectedImage === index ? "ring-2 ring-blue-500" : ""
              }`}
            />
          ))}
        </div>
      ) : (
        <div className="flex gap-2 mt-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-[72.3px] h-[70px] rounded-[11.48px] border border-[#5D5C86] border-opacity-50 overflow-hidden ${
                selectedImage === index ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="relative w-full h-full bg-white">
                {index === 0 && (
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      )}

    </div>
  )
}

export default ProductGallery

