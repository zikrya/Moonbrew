"use client"

import { useState } from "react"

const Subscribe = () => {
  const [selectedOption, setSelectedOption] = useState<"subscribe" | "onetime">("subscribe")

  const handleOptionSelect = (option: "subscribe" | "onetime") => {
    setSelectedOption(option)
  }

  const originalPrice = ""
  const discountedPrice = selectedOption === "subscribe" ? 38 : 48

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Subscribe & Save */}
      <div
        className={`relative w-full bg-white rounded-[13.63px] ${
          selectedOption === "subscribe" ? "border-[3px] border-[#5D5CB6]" : "border border-gray-200"
        } p-4 sm:p-6 cursor-pointer transition-colors`}
        onClick={() => handleOptionSelect("subscribe")}
      >
        {/* Most Popular Tag */}
        <div className="absolute -top-[12px] right-[20px] z-10">
          <div className="w-[120px] h-[24px] bg-[#5D5CB6] rounded-[4.09px] flex items-center justify-center">
            <span className="text-white font-bold text-[15px] leading-[133%]">Most Popular</span>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center">
          <div
            className={`w-[16.5px] h-[16.5px] rounded-full ${
              selectedOption === "subscribe"
                ? "bg-[#5D5CB6] border-[0.68px] border-[#5D5CB6]"
                : "border-2 border-gray-300 bg-white"
            } mr-3 transition-colors`}
          ></div>
          <h2 className="text-base sm:text-lg md:text-[19px] font-semibold leading-[150%] text-black">
            Subscribe & Save
          </h2>
        </div>

        {/* Pricing */}
        <div className="flex flex-wrap sm:flex-nowrap items-center mt-2 gap-2">
          <div className="flex items-center">
            <span className="text-base sm:text-lg md:text-[19px] font-semibold leading-[133%] text-[#BABABA] line-through align-middle">
              $48
            </span>
            <span className="text-base sm:text-lg md:text-[19px] font-semibold leading-[133%] text-[#5D5CB6] align-middle ml-2">
              $38 / Pack
            </span>
          </div>
          <div className="ml-auto">
            <span className="text-base sm:text-lg md:text-[19px] font-semibold leading-[133%] text-[#5D5CB6] text-right align-middle">
              $1.26/ <span className="text-[#BABABA]">SERVING</span>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] border-t-[0.94px] border-[#5D5CB6]/50 my-4"></div>

        {/* Benefits */}
        <div className="space-y-3">
          {[
            "Save $10 Per Pack",
            "Free Glass Bottle With Order ($25 Value)",
            "Delivered Every 1 month",
            "Free, Fast Shipping",
            "No Commitments, Cancel Anytime",
          ].map((text, idx) => (
            <div className="flex items-center" key={idx}>
              <div className="w-5 h-5 rounded-full border border-[#5D5CB6] flex items-center justify-center mr-3">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="#5D5CB6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-600 text-xs sm:text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* One Time Purchase */}
      <div
        className={`rounded-[13.63px] w-full ${
          selectedOption === "onetime" ? "bg-white border-[3px] border-[#5D5CB6]" : "bg-gray-100 border border-gray-200"
        } p-4 sm:p-6 cursor-pointer transition-colors`}
        onClick={() => handleOptionSelect("onetime")}
      >
        <div className="flex flex-col sm:flex-row sm:items-center w-full gap-2">
          <div className="flex items-center">
            <div
              className={`w-5 h-5 rounded-full ${
                selectedOption === "onetime"
                  ? "bg-[#5D5CB6] border-[0.68px] border-[#5D5CB6]"
                  : "border-2 border-gray-300 bg-white"
              } flex-shrink-0 mr-3 transition-colors`}
            ></div>
            <span className="text-base sm:text-lg md:text-[19px] font-semibold leading-[150%] text-[#606060]">
              One Time Purchase
            </span>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center ml-8 sm:ml-auto gap-2 sm:gap-0">
            <span className="text-base sm:text-lg md:text-[19px] font-semibold leading-[133%] text-[#5D5CB6]">
              $48 / Pack
            </span>
            <div className="ml-0 sm:ml-6 text-base sm:text-lg md:text-[19px] font-semibold leading-[133%] text-right align-middle">
              <span className="text-[#5D5CB6]">$1.60/ </span>
              <span className="text-[#BABABA]">SERVING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="mt-4 flex flex-col items-center w-full">
        <button className="w-full sm:max-w-[489px] h-[50px] sm:h-[58px] bg-[#5D5CB6] rounded-[27.28px] text-white font-bold text-base sm:text-lg md:text-[19px] leading-[133%] flex items-center justify-center transition-all duration-200 hover:bg-[#5D5CB6]/90 active:bg-[#5D5CB6]/70 active:scale-95 active:shadow-inner">
          ADD TO CART{" "}
          {selectedOption === "subscribe" ? (
            <>
              - <span className="line-through mx-1">{originalPrice}</span> ${discountedPrice}
            </>
          ) : (
            <> - ${discountedPrice}</>
          )}
        </button>

        <p className="text-sm sm:text-base md:text-[18px] font-normal leading-[150%] text-center tracking-[-0.02em] mt-4 px-4">
          Your best sleep is estimated to arrive: <span className="font-bold">Sun, January 19.</span> Order by{" "}
          <span className="font-bold">5 hrs 26 mins</span>
        </p>

        {/* Icons */}
        <div className="mt-4 w-full sm:max-w-[446px]">
          <div className="h-auto py-4 sm:h-[87px] bg-[#F6F6F6] rounded-lg flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 gap-4 sm:gap-0">
            {[
              {
                label: "Free Shipping\nOrders $60+",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 3H1V16H16V3Z"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 8H20L23 11V16H16V8Z"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                label: "60-day\nMoney Back Guarantee",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M16 2V6" stroke="#6E6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 2V6" stroke="#6E6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M3 10H21"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 14H8.01"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14H12.01"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 14H16.01"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 18H8.01"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 18H12.01"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 18H16.01"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                label: "250,000+\nHappy Customers",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 21V19C3 15.134 6.13401 12 10 12H14C17.866 12 21 15.134 21 19V21"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 21H16"
                      stroke="#6E6D6D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center text-[#6E6D6D] text-xs sm:text-[14px]">
                {item.icon}
                <p className="mt-1 leading-[120%] whitespace-pre-line tracking-[-0.02em]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe

