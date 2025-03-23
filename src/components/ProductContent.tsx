"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const ProductContent = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()

    window.addEventListener("resize", checkIfMobile)

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <div className={isMobile ? "px-4" : "pl-6"}>
      <h1
        className={`font-bold leading-tight text-black ${isMobile ? "text-2xl mt-2" : "text-[41px] w-[590px]"}`}
        style={{ fontFamily: "Graphik, sans-serif" }}
      >
        The Magnesium Sleep Aid
      </h1>
      <div className={`flex items-center mt-2 ${isMobile ? "w-full" : "w-[280px]"}`}>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`fill-yellow-400 text-yellow-400 ${isMobile ? "w-4 h-4" : "w-5 h-5"}`} />
          ))}
        </div>
        <span className={`ml-2 font-medium ${isMobile ? "text-xs" : "text-sm"}`}>16,010 reviews</span>
      </div>

      <p className={`mt-3 text-gray-700 ${isMobile ? "text-sm" : "text-base max-w-[590px]"}`}>
        The best alternative to melatonin{isMobile ? " and sleeping pills" : ""} that combines magnesium and{" "}
        {isMobile ? "14" : "11"} superfoods to help you fall asleep, stay asleep, and wake up feeling refreshed.
      </p>

      <div className="mt-3">
        <div className={`inline-flex items-center px-4 py-1.5 bg-[#F2CEC8] rounded-[16px]`}>
          <span className={`font-bold text-black ${isMobile ? "text-sm" : "text-[18px]"}`}>75k+ packs sold</span>
          <span className={`font-medium text-black ml-1 ${isMobile ? "text-sm" : "text-[18px]"}`}>
            in the last month
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductContent