"use client"

import { Star } from "lucide-react"

const ProductContent = () => {
  return (
    <div className="px-4 md:pl-6 md:pr-0">
      <h1
        className="font-bold leading-tight text-black text-2xl sm:text-3xl md:text-4xl lg:text-[41px] w-full md:max-w-[590px]"
        style={{ fontFamily: "Graphik, sans-serif" }}
      >
        The Magnesium Sleep Aid
      </h1>

      <div className="flex items-center mt-2 w-full md:w-auto">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="fill-yellow-400 text-yellow-400 w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
          ))}
        </div>
        <span className="ml-2 font-medium text-xs sm:text-sm">16,010 reviews</span>
      </div>

      <p className="mt-3 text-gray-700 text-sm sm:text-base md:text-base w-full md:max-w-[590px]">
        The best alternative to melatonin <span className="md:hidden">and sleeping pills</span> that combines magnesium
        and <span className="hidden md:inline">11</span>
        <span className="md:hidden">14</span> superfoods to help you fall asleep, stay asleep, and wake up feeling
        refreshed.
      </p>

      <div className="mt-3">
        <div className="inline-flex items-center px-4 py-1.5 bg-[#F2CEC8] rounded-[16px]">
          <span className="font-bold text-black text-sm sm:text-base md:text-[18px]">75k+ packs sold</span>
          <span className="font-medium text-black ml-1 text-sm sm:text-base md:text-[18px]">in the last month</span>
        </div>
      </div>
    </div>
  )
}

export default ProductContent
