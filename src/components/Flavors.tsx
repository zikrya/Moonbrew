"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Subscribe from "./Subscribe"

const Flavors = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [productQuantities, setProductQuantities] = useState<{ [key: string]: number }>({
    "Hot Cocoa": 1,
    "Sleepy Berry": 1,
  })

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const incrementQuantity = (productName: string) => {
    setProductQuantities((prev) => ({
      ...prev,
      [productName]: (prev[productName] || 1) + 1,
    }))
  }

  const decrementQuantity = (productName: string) => {
    setProductQuantities((prev) => ({
      ...prev,
      [productName]: Math.max(1, (prev[productName] || 1) - 1),
    }))
  }

  const handleProductSelect = (productName: string) => {
    if (selectedProduct === productName) {
      setSelectedProduct(null)
    } else {
      setSelectedProduct(productName)
    }
  }

  return (
    <div className={`relative bg-white rounded-[15px] ${isMobile ? "w-full px-4 py-4" : "mx-auto w-[590px] h-[1467px]"}`}>
      {/* Header */}
      <div className={isMobile ? "pt-2" : "pt-6 px-6"}>
        <h1 className={`font-semibold leading-[150%] ${isMobile ? "text-base" : "text-[19px]"}`}>Choose Your Flavors</h1>
        <p className={`text-[#606060] ${isMobile ? "text-sm" : "text-[15px]"} leading-[150%]`}>30 servings per pack</p>
      </div>

      {/* Product cards */}
      <div className={`mt-6 flex flex-col gap-4 ${isMobile ? "" : "px-4"}`}>
        {[
          {
            name: "Mint Chocolate",
            description: "A smooth chocolate infusion with refreshing notes of peppermint and cocoa.",
            image: "/mint.png",
            tag: "NEW FLAVOR",
          },
          {
            name: "Hot Cocoa",
            description: "The perfect blend of chocolatey warmth and bedtime bliss—sip, savor, and sleep.",
            image: "/hot.png",
            tag: "BEST SELLER",
          },
          {
            name: "Cinnamon Chai",
            description: "A delicious chai blend with hints of cinnamon and cardamom.",
            image: "/chai.png",
          },
          {
            name: "Sleepy Berry",
            description: "A refreshingly bold berry flavor to quiet your mind and prepare you for dreamland.",
            image: "/sleepy.png",
          },
          {
            name: "Rose",
            description: "Soft floral notes of rose that make for a deliciously soothing tea before bed.",
            image: "/rose.png",
          },
        ].map((product) => {
          const isSelected = selectedProduct === product.name
          const showCounter = ["Hot Cocoa", "Sleepy Berry"].includes(product.name)

          return (
            <div
              key={product.name}
              className={`w-full rounded-[8px] ${isSelected ? "border-2 border-[#5D5CB6]/80" : "border border-gray-200"} bg-white p-4 flex items-center justify-between relative cursor-pointer transition-colors`}
              onClick={() => handleProductSelect(product.name)}
            >
              {/* Image */}
              <div className="flex-shrink-0 mr-4">
                <div className="w-[70px] h-[75px] bg-[#F3F3F3] rounded-[15px] flex items-center justify-center">
                  <Image src={product.image} alt={product.name} width={isMobile ? 60 : 80} height={isMobile ? 60 : 80} className="object-contain" />
                </div>
              </div>

              {/* Text */}
              <div className="flex-grow">
                <h3 className={`font-semibold leading-[150%] text-[#606060] ${isMobile ? "text-sm" : "text-[19px]"}`}>
                  {product.name}
                </h3>
                <p className={`italic text-[#606060] leading-[150%] ${isMobile ? "text-xs" : "text-[13px]"}`}>
                  {product.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex-shrink-0 ml-4 flex items-center" onClick={(e) => e.stopPropagation()}>
                {showCounter ? (
                  <>
                    <button
                      className="w-[40px] h-[50px] bg-[#5D5CB6] text-white rounded-[8px] border-2 border-[#5D5CB6] flex items-center justify-center"
                      onClick={() => decrementQuantity(product.name)}
                    >
                      <span className="text-[36px] font-medium leading-[150%]">-</span>
                    </button>
                    <div className="w-[40px] h-[36px] flex items-center justify-center">
                      <span className="text-[20px] font-bold leading-[150%] text-black">
                        {productQuantities[product.name] || 1}
                      </span>
                    </div>
                    <button
                      className="w-[40px] h-[50px] bg-[#5D5CB6] text-white rounded-[8px] border-2 border-[#5D5CB6] flex items-center justify-center"
                      onClick={() => incrementQuantity(product.name)}
                    >
                      <span className="text-[36px] font-medium leading-[150%]">+</span>
                    </button>
                  </>
                ) : (
                  <button
                    className={`w-[134px] h-[50px] bg-[#5D5CB6] rounded-[8px] text-white font-bold text-[19px] leading-[150%] flex items-center justify-center ${isMobile ? "text-sm" : "text-[19px]"} rounded-[8px] flex items-center justify-center`}
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    Add +
                  </button>
                )}
              </div>

              {/* Tag */}
              {product.tag && (
                <div className="absolute -top-2 right-4">
                  <div
                    className={`h-[19px] rounded-[4px] flex items-center justify-center px-2 ${
                      product.tag === "NEW FLAVOR"
                        ? "bg-[#E7E7F4]"
                        : "bg-gradient-to-r from-[#7C7BF8]/30 via-[#E7E7F4] to-[#F2CEC8]/60"
                    }`}
                  >
                    <span className="text-[10px] font-bold leading-[150%] text-[#5D5CB6]">{product.tag}</span>
                  </div>
                </div>
              )}
            </div>
          )
        })}

        <Subscribe />
      </div>
    </div>
  )
}

export default Flavors
