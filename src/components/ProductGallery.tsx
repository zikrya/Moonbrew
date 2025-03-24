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

  return (
    <div className="flex flex-col w-full items-center">
      <div className="relative bg-[#E8E8E8] overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[518.78px] md:rounded-lg">
        <Image
          src={images[selectedImage].src || "/placeholder.svg"}
          alt={images[selectedImage].alt}
          fill
          className="object-contain"
          priority
        />
        <div className="absolute top-4 right-4">
          <div className="md:hidden bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-full">FREE BOTTLE</div>
        </div>
      </div>

      <div className="flex justify-center gap-1 sm:gap-2 mt-2 w-full md:w-auto md:max-w-[667px]">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`
              w-[40px] h-[40px]
              sm:w-[50px] sm:h-[50px]
              md:w-[60px] md:h-[60px]
              lg:w-[72.3px] lg:h-[70px]
              rounded-[8px] md:rounded-[11.48px]
              border border-gray-300 md:border-[#5D5C86] md:border-opacity-50
              bg-white overflow-hidden
              ${selectedImage === index ? "ring-2 ring-blue-500" : ""}
            `}
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery