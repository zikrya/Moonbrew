import Flavors from "@/components/Flavors";
import ProductContent from "@/components/ProductContent";
import ProductGallery from "@/components/ProductGallery";

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <ProductGallery />
        <div className="flex flex-col gap-6">
          <ProductContent />
          <Flavors />
        </div>
      </div>
    </main>
  )
}


