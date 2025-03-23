"use client"

import { useState } from "react"
import Image from "next/image"
import Subscribe from "./Subscribe"

const Flavors = () => {
  // State to track which product is selected
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  // Function to handle product selection
  const handleProductSelect = (productName: string) => {
    // If the same product is clicked again, deselect it
    if (selectedProduct === productName) {
      setSelectedProduct(null)
    } else {
      setSelectedProduct(productName)
    }
  }

  return (
    <div className="relative mx-auto w-[590px] h-[1467px] bg-white rounded-[15px] border border-blue-300">
      {/* Header section */}
      <div className="pt-6 px-6">
        <h1 className="text-[19px] font-semibold leading-[150%]">Choose Your Flavors</h1>
        <p className="text-[15px] font-normal leading-[150%] text-[#606060]">30 servings per pack</p>
      </div>

      {/* Product cards */}
      <div className="mt-6 px-4 flex flex-col gap-4">
        {/* Mint Chocolate product card */}
        <div
          className={`w-full h-[116px] rounded-[8px] ${
            selectedProduct === "Mint Chocolate" ? "border-2 border-[#5D5CB6]/80" : "border border-gray-200"
          } bg-white p-4 flex items-center justify-between relative cursor-pointer transition-colors`}
          onClick={() => handleProductSelect("Mint Chocolate")}
        >
          {/* Product image with background */}
          <div className="flex-shrink-0 mr-4">
            <div className="w-[86.04px] h-[91.93px] bg-[#F3F3F3] rounded-[15px] flex items-center justify-center">
              <Image src="/mint.png" alt="Mint Chocolate" width={80} height={80} className="object-contain" />
            </div>
          </div>

          {/* Product info */}
          <div className="flex-grow">
            <h3 className="text-[19px] font-semibold leading-[150%] text-[#606060]">Mint Chocolate</h3>
            <p className="text-[13px] font-normal italic leading-[150%] text-[#606060]">
              A smooth chocolate infusion with refreshing notes of peppermint and cocoa.
            </p>
          </div>

          {/* Add button */}
          <div className="flex-shrink-0 ml-4">
            <button
              className="w-[134px] h-[50px] bg-[#5D5CB6] text-white font-bold text-[19px] rounded-[8px] flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation() // Prevent triggering the card's onClick
                // Add product logic here
              }}
            >
              Add +
            </button>
          </div>

          {/* New flavor tag - positioned outside the card */}
          <div className="absolute -top-2 right-4">
            <div className="w-[112px] h-[19px] bg-[#E7E7F4] rounded-[4px] flex items-center justify-center">
              <span className="text-[10px] font-bold leading-[150%] text-[#5D5CB6]">NEW FLAVOR</span>
            </div>
          </div>
        </div>

        {/* Hot Cocoa product card */}
        <div
          className={`w-full h-[116px] rounded-[8px] ${
            selectedProduct === "Hot Cocoa" ? "border-2 border-[#5D5CB6]/80" : "border border-gray-200"
          } bg-white p-4 flex items-center justify-between relative cursor-pointer transition-colors`}
          onClick={() => handleProductSelect("Hot Cocoa")}
        >
          {/* Product image with background */}
          <div className="flex-shrink-0 mr-4">
            <div className="w-[86.04px] h-[91.93px] bg-[#F3F3F3] rounded-[15px] flex items-center justify-center">
              <Image src="/hot.png" alt="Hot Cocoa" width={80} height={80} className="object-contain" />
            </div>
          </div>

          {/* Product info */}
          <div className="flex-grow">
            <h3 className="text-[19px] font-semibold leading-[150%] text-[#606060]">Hot Cocoa</h3>
            <p className="text-[13px] font-normal italic leading-[150%] text-[#606060]">
              The perfect blend of chocolatey warmth and bedtime bliss—sip, savor, and sleep.
            </p>
          </div>

          {/* Quantity counter */}
          <div className="flex-shrink-0 ml-4 flex items-center" onClick={(e) => e.stopPropagation()}>
            {/* Minus button */}
            <button className="w-[40px] h-[50px] bg-[#5D5CB6] text-white rounded-[8px] border-2 border-[#5D5CB6] flex items-center justify-center">
              <span className="text-[36px] font-medium leading-[150%]">-</span>
            </button>

            {/* Quantity display */}
            <div className="w-[79.53px] h-[36px] flex items-center justify-center">
              <span className="text-[24px] font-bold leading-[150%] text-black">1</span>
            </div>

            {/* Plus button */}
            <button className="w-[40px] h-[50px] bg-[#5D5CB6] text-white rounded-[8px] border-2 border-[#5D5CB6] flex items-center justify-center">
              <span className="text-[36px] font-medium leading-[150%]">+</span>
            </button>
          </div>

          {/* Best seller tag - positioned outside the card with gradient */}
          <div className="absolute -top-2 right-4">
            <div className="w-[112px] h-[19px] bg-gradient-to-r from-[#7C7BF8]/30 via-[#E7E7F4] to-[#F2CEC8]/60 rounded-[4px] flex items-center justify-center">
              <span className="text-[10px] font-bold leading-[150%] text-[#5D5CB6]">BEST SELLER</span>
            </div>
          </div>
        </div>

        {/* Cinnamon Chai product card */}
        <div
          className={`w-full h-[116px] rounded-[8px] ${
            selectedProduct === "Cinnamon Chai" ? "border-2 border-[#5D5CB6]/80" : "border border-gray-200"
          } bg-white p-4 flex items-center justify-between relative cursor-pointer transition-colors`}
          onClick={() => handleProductSelect("Cinnamon Chai")}
        >
          {/* Product image with background */}
          <div className="flex-shrink-0 mr-4">
            <div className="w-[86.04px] h-[91.93px] bg-[#F3F3F3] rounded-[15px] flex items-center justify-center">
              <Image src="/chai.png" alt="Cinnamon Chai" width={80} height={80} className="object-contain" />
            </div>
          </div>

          {/* Product info */}
          <div className="flex-grow">
            <h3 className="text-[19px] font-semibold leading-[150%] text-[#606060]">Cinnamon Chai</h3>
            <p className="text-[13px] font-normal italic leading-[150%] text-[#606060]">
              A delicious chai blend with hints of cinnamon and cardamom.
            </p>
          </div>

          {/* Add button */}
          <div className="flex-shrink-0 ml-4">
            <button
              className="w-[134px] h-[50px] bg-[#5D5CB6] text-white font-bold text-[19px] rounded-[8px] flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation() // Prevent triggering the card's onClick
                // Add product logic here
              }}
            >
              Add +
            </button>
          </div>
        </div>

        {/* Sleepy Berry product card */}
        <div
          className={`w-full h-[116px] rounded-[8px] ${
            selectedProduct === "Sleepy Berry" ? "border-2 border-[#5D5CB6]/80" : "border border-gray-200"
          } bg-white p-4 flex items-center justify-between relative cursor-pointer transition-colors`}
          onClick={() => handleProductSelect("Sleepy Berry")}
        >
          {/* Product image with background */}
          <div className="flex-shrink-0 mr-4">
            <div className="w-[86.04px] h-[91.93px] bg-[#F3F3F3] rounded-[15px] flex items-center justify-center">
              <Image src="/sleepy.png" alt="Sleepy Berry" width={80} height={80} className="object-contain" />
            </div>
          </div>

          {/* Product info */}
          <div className="flex-grow">
            <h3 className="text-[19px] font-semibold leading-[150%] text-[#606060]">Sleepy Berry</h3>
            <p className="text-[13px] font-normal italic leading-[150%] text-[#606060]">
              A refreshingly bold berry flavor to quiet your mind and prepare you for dreamland.
            </p>
          </div>

          {/* Quantity counter */}
          <div className="flex-shrink-0 ml-4 flex items-center" onClick={(e) => e.stopPropagation()}>
            {/* Minus button */}
            <button className="w-[40px] h-[50px] bg-[#5D5CB6] text-white rounded-[8px] border-2 border-[#5D5CB6] flex items-center justify-center">
              <span className="text-[36px] font-medium leading-[150%]">-</span>
            </button>

            {/* Quantity display */}
            <div className="w-[79.53px] h-[36px] flex items-center justify-center">
              <span className="text-[24px] font-bold leading-[150%] text-black">1</span>
            </div>

            {/* Plus button */}
            <button className="w-[40px] h-[50px] bg-[#5D5CB6] text-white rounded-[8px] border-2 border-[#5D5CB6] flex items-center justify-center">
              <span className="text-[36px] font-medium leading-[150%]">+</span>
            </button>
          </div>
        </div>

        {/* Rose product card */}
        <div
          className={`w-full h-[116px] rounded-[8px] ${
            selectedProduct === "Rose" ? "border-2 border-[#5D5CB6]/80" : "border border-gray-200"
          } bg-white p-4 flex items-center justify-between relative cursor-pointer transition-colors`}
          onClick={() => handleProductSelect("Rose")}
        >
          {/* Product image with background */}
          <div className="flex-shrink-0 mr-4">
            <div className="w-[86.04px] h-[91.93px] bg-[#F3F3F3] rounded-[15px] flex items-center justify-center">
              <Image src="/rose.png" alt="Rose" width={74} height={74.56} className="object-contain" />
            </div>
          </div>

          {/* Product info */}
          <div className="flex-grow">
            <h3 className="text-[19px] font-semibold leading-[150%] text-[#606060]">Rose</h3>
            <p className="text-[13px] font-normal italic leading-[150%] text-[#606060]">
              Soft floral notes of rose that make for a deliciously soothing tea before bed.
            </p>
          </div>

          {/* Add button */}
          <div className="flex-shrink-0 ml-4">
            <button
              className="w-[134px] h-[50px] bg-[#5D5CB6] text-white font-bold text-[19px] rounded-[8px] flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation() // Prevent triggering the card's onClick
                // Add product logic here
              }}
            >
              Add +
            </button>
          </div>
        </div>
        <Subscribe />
      </div>
    </div>
  )
}

export default Flavors




