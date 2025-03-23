import Flavors from "@/components/Flavors";
import ProductContent from "@/components/ProductContent";
import ProductGallery from "@/components/ProductGallery";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Build your Bundle [Desktop]</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <ProductGallery />
        <div className="flex flex-col gap-6">
          <ProductContent />
          <Flavors />
        </div>
      </div>
    </main>
  )
}


