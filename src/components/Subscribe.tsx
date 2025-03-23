"use client"

import { useState } from "react"
import Image from "next/image"

const Subscribe = () => {
  const [selectedOption, setSelectedOption] = useState<"subscribe" | "onetime">("subscribe")

  const handleOptionSelect = (option: "subscribe" | "onetime") => {
    setSelectedOption(option)
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`relative w-[552px] h-[308px] bg-white rounded-[13.63px] ${
          selectedOption === "subscribe" ? "border-[3px] border-[#5D5CB6]" : "border border-gray-200"
        } p-6 cursor-pointer transition-colors`}
        onClick={() => handleOptionSelect("subscribe")}
      >

        <div className="absolute -top-[12px] right-[20px] z-10">
          <div className="w-[120px] h-[24px] bg-[#5D5CB6] rounded-[4.09px] flex items-center justify-center">
          <span className="text-white font-bold text-[15px] leading-[133%]">Most Popular</span>
          </div>
        </div>

        <div className="flex items-center">
          <div
            className={`w-[16.5px] h-[16.5px] rounded-full ${
              selectedOption === "subscribe"
                ? "bg-[#5D5CB6] border-[0.68px] border-[#5D5CB6]"
                : "border-2 border-gray-300 bg-white"
            } mr-3 transition-colors`}
          ></div>
          <h2 className="text-[19px] font-semibold leading-[150%] text-black">Subscribe & Save</h2>
        </div>

        <div className="flex items-center mt-2">
          <span className="w-[37px] h-[25px] text-[19px] font-semibold leading-[133%] text-[#BABABA] line-through align-middle">
            $48
          </span>
          <span className="w-[97px] h-[25px] text-[19px] font-semibold leading-[133%] text-[#5D5CB6] align-middle ml-2">
            $38 / Pack
          </span>
          <div className="ml-auto">
            <span className="w-[146px] h-[25px] text-[19px] font-semibold leading-[133%] text-[#5D5CB6] text-right align-middle">
              $1.26/ <span className="text-[#BABABA]">SERVING</span>
            </span>
          </div>
        </div>

        <div className="w-[528px] h-[1px] border-t-[0.94px] border-[#5D5CB6]/50 my-4 mx-auto"></div>

        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-[#5D5CB6] flex items-center justify-center mr-3">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 3L4.5 8.5L2 6"
                  stroke="#5D5CB6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-600">Save $10 Per Pack</span>
          </div>

          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-[#5D5CB6] flex items-center justify-center mr-3">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 3L4.5 8.5L2 6"
                  stroke="#5D5CB6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-600">Free Glass Bottle With Order ($25 Value)</span>
          </div>

          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-[#5D5CB6] flex items-center justify-center mr-3">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 3L4.5 8.5L2 6"
                  stroke="#5D5CB6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-600">
              Delivered Every 1 month
              <svg
                className="inline-block ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </div>

          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-[#5D5CB6] flex items-center justify-center mr-3">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 3L4.5 8.5L2 6"
                  stroke="#5D5CB6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-600">Free, Fast Shipping</span>
          </div>

          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border border-[#5D5CB6] flex items-center justify-center mr-3">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 3L4.5 8.5L2 6"
                  stroke="#5D5CB6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-600">No Commitments, Cancel Anytime</span>
          </div>
        </div>
      </div>

      <div
        className={`w-[552px] h-[89px] ${
          selectedOption === "onetime" ? "bg-white border-[3px] border-[#5D5CB6]" : "bg-gray-100 border border-gray-200"
        } rounded-[13.63px] p-6 flex items-center cursor-pointer transition-colors`}
        onClick={() => handleOptionSelect("onetime")}
      >
        <div
          className={`w-5 h-5 rounded-full ${
            selectedOption === "onetime"
              ? "bg-[#5D5CB6] border-[0.68px] border-[#5D5CB6]"
              : "border-2 border-gray-300 bg-white"
          } flex-shrink-0 mr-3 transition-colors`}
        ></div>

        <div className="flex items-center w-full">
          <span className="w-[217px] h-[27px] text-[19px] font-semibold leading-[150%] text-[#606060]">
            One Time Purchase
          </span>
          <div className="flex items-center ml-auto">
            <span className="w-[98px] h-[25px] text-[19px] font-semibold leading-[133%] text-[#5D5CB6]">
              $48 / Pack
            </span>
            <div className="ml-6 w-[147px] h-[25px] text-[19px] font-semibold leading-[133%] text-right align-middle">
      <span className="text-[#5D5CB6]">$1.60/ </span>
      <span className="text-[#BABABA]">SERVING</span>
    </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center">
        <button className="w-[489px] h-[58px] bg-[#5D5CB6] rounded-[27.28px] text-white font-bold text-[19px] leading-[133%] flex items-center justify-center">
          ADD TO CART - <span className="line-through mx-1">$96</span> $76
        </button>

        <p className="w-[376px] h-[54px] text-[18px] font-normal leading-[150%] text-center tracking-[-0.02em] mt-4">
          Your best sleep is estimated to arrive: <span className="font-bold">Sun, January 19.</span> Order by{" "}
          <span className="font-bold">5 hrs 26 mins</span>
        </p>

        <div className="w-[446px] h-[168px] mt-4">
          <div className="w-[446px] h-[87px] bg-[#F6F6F6] rounded-lg flex justify-between items-center px-8">

            <div className="flex flex-col items-center w-[81px] h-[47px]">
              <Image src="/placeholder.svg?height=24&width=24" alt="Shipping icon" width={24} height={24} />
              <p className="text-[14px] font-normal leading-[120%] text-center tracking-[-0.02em] text-[#6E6D6D] mt-1">
                Free Shipping
                <br />
                Orders $60+
              </p>
            </div>

            <div className="flex flex-col items-center w-[95px] h-[47px]">
              <Image src="/placeholder.svg?height=24&width=24" alt="Guarantee icon" width={24} height={24} />
              <p className="text-[14px] font-normal leading-[120%] text-center tracking-[-0.02em] text-[#6E6D6D] mt-1">
                60-day
                <br />
                Money Back Guarantee
              </p>
            </div>

            <div className="flex flex-col items-center w-[73px] h-[47px]">
              <Image src="/placeholder.svg?height=24&width=24" alt="Customers icon" width={24} height={24} />
              <p className="text-[14px] font-normal leading-[120%] text-center tracking-[-0.02em] text-[#6E6D6D] mt-1">
                250,000+
                <br />
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe

