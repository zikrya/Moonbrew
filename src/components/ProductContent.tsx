import { Star } from "lucide-react"

const ProductContent = () => {
  return (
    <div className="pl-6">
      {/* Product Title */}
      <h1
        className="text-[41px] font-bold leading-tight text-black w-[590px]"
        style={{ fontFamily: "Graphik, sans-serif" }}
      >
        The Magnesium Sleep Aid
      </h1>

      {/* Ratings */}
      <div className="flex items-center mt-2 w-[280px]">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="ml-2 text-sm font-medium">16,010 reviews</span>
      </div>

      {/* Product Description */}
      <p className="mt-3 text-base text-gray-700 max-w-[590px]">
        The best alternative to melatonin that combines magnesium and 11 superfoods to help you fall asleep, stay
        asleep, and wake up feeling refreshed.
      </p>

      {/* Sales Information */}
      <div className="mt-3">
        <div className="inline-flex items-center px-4 py-1.5 bg-[#F2CEC8] rounded-[16px]">
          <span className="text-[18px] font-bold text-black">75k+ packs sold</span>
          <span className="text-[18px] font-medium text-black ml-1">in the last month</span>
        </div>
      </div>

      {/* Price and Options would go here in the next section */}
    </div>
  )
}

export default ProductContent

