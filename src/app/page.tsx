import Flavors from "@/components/Flavors";
import ProductContent from "@/components/ProductContent";
import ProductGallery from "@/components/ProductGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 lg:block hidden">Build your Bundle [Desktop]</h1>
        <h1 className="text-xl font-bold mb-6 lg:hidden">Build your Bundle [Mobile]</h1>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
              <ProductGallery />
            </div>
            <div className="w-full lg:w-1/2">
              <ProductContent />
              <div className="mt-6">
                <Flavors />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="w-full overflow-x-hidden">
            <ProductGallery />
            <div className="mt-6">
              <ProductContent />
            </div>
            <div className="mt-6">
              <Flavors />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}