"use client"

import { useState } from "react"
import Image from "next/image"

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0)

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
    <div className="flex flex-col items-center">
      {/* Main product image with badge */}
      <div className="relative w-[667px] h-[518.78px] bg-[#E8E8E8] mb-4 rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage].src || "/placeholder.svg"}
          alt={images[selectedImage].alt}
          fill
          className="object-contain"
          priority
        />

        {/* New Year Free Bottle Badge */}
        <div className="absolute top-4 right-4">
          <div className="relative"></div>
        </div>
      </div>

      {/* Thumbnail navigation */}
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

      <div className="text-xs text-blue-500 mt-2">{selectedImage === 0 && "667 × 518.78"}</div>
    </div>
  )
}

export default ProductGallery

