"use client"

import { useState, useEffect } from "react"
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

  return (
    <main className={`min-h-screen ${isMobile ? "p-0" : "p-8 max-w-7xl mx-auto"}`}>
      <div className={`flex flex-col md:flex-row ${isMobile ? "" : "gap-8 justify-center"}`}>
        <ProductGallery />
        <div className="flex flex-col gap-6">
          <ProductContent />
          {!isMobile && <Flavors />}
        </div>
      </div>
    </main>
  )
}
