"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, ChevronRight, Menu, X } from "lucide-react"

const Page = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#5D5CB6]">Moonbrew</div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a href="#benefits" className="text-gray-700 hover:text-[#5D5CB6] transition-colors text-sm font-medium">
              Benefits
            </a>
            <a href="#flavors" className="text-gray-700 hover:text-[#5D5CB6] transition-colors text-sm font-medium">
              Flavors
            </a>
            <a href="#faq" className="text-gray-700 hover:text-[#5D5CB6] transition-colors text-sm font-medium">
              FAQ
            </a>
          </div>

          <div className="hidden md:block">
            <Link
              href="/shopping"
              className="bg-[#5D5CB6] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#5D5CB6]/90 transition-all duration-200 active:scale-95"
            >
              Shop Now
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
              <a href="#benefits" className="text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>
                Benefits
              </a>
              <a href="#testimonials" className="text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </a>
              <a href="#flavors" className="text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>
                Flavors
              </a>
              <a href="#faq" className="text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <Link
                href="/shopping"
                className="bg-[#5D5CB6] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#5D5CB6]/90 transition-all duration-200 active:scale-95 inline-block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-[#F8F8FF] via-white to-[#F2CEC8]/10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1A1A2E] mb-6">
              Your Best Sleep <span className="text-[#5D5CB6]">Starts Here</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Discover our natural sleep aid drink mix with 5 delicious flavors to help you fall asleep faster and wake
              up refreshed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shopping"
                className="bg-[#5D5CB6] text-white px-8 py-3 rounded-full font-medium text-base hover:bg-[#5D5CB6]/90 transition-all duration-200 active:scale-95 flex items-center justify-center"
              >
                Choose Your Flavors <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#benefits"
                className="border border-[#5D5CB6] text-[#5D5CB6] px-8 py-3 rounded-full font-medium text-base hover:bg-[#5D5CB6]/5 transition-all duration-200 flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
            <div className="flex items-center mt-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#5D5CB6] text-[#5D5CB6]" />
                ))}
              </div>
              <p className="ml-2 text-gray-600">
                <span className="font-semibold">4.9/5</span> from over 250,000+ happy customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Moonbrew?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our natural sleep aid is designed to help you fall asleep faster, stay asleep longer, and wake up
              refreshed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto mb-4 text-[#5D5CB6]"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Fall Asleep Faster",
                description:
                  "Our unique blend helps reduce the time it takes to fall asleep by an average of 30 minutes.",
              },
              {
                icon: (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto mb-4 text-[#5D5CB6]"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 15L12 11L16 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11V19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 7H12.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "All Natural Ingredients",
                description:
                  "Made with natural ingredients like melatonin, magnesium, and herbs that promote relaxation and sleep.",
              },
              {
                icon: (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto mb-4 text-[#5D5CB6]"
                  >
                    <path
                      d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Non-Habit Forming",
                description:
                  "Unlike prescription sleep aids, our formula is non-habit forming and won't leave you feeling groggy in the morning.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[#F8F8FF] p-8 rounded-xl text-center hover:shadow-sm transition-shadow duration-300 flex flex-col items-center"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-[#F8F8FF] rounded-xl max-w-4xl w-full">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="mr-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#5D5CB6]"
                  >
                    <path
                      d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01L9 11.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">60-Day Money Back Guarantee</h4>
                  <p className="text-gray-600">Try it risk-free for 60 days</p>
                </div>
              </div>
              <Link
                href="/shopping"
                className="bg-[#5D5CB6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5D5CB6]/90 transition-all duration-200 active:scale-95 flex items-center"
              >
                Try Risk-Free <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Flavors Preview Section */}
      {/* Flavors Preview Section */}
      <section id="flavors" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Discover Our Flavors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from 5 delicious flavors, each carefully crafted to help you relax and sleep better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                name: "Mint Chocolate",
                description: "A smooth chocolate infusion with refreshing notes of peppermint and cocoa.",
                tag: "NEW FLAVOR",
                color: "bg-[#F8F8FF]",
                image: "/mint.png"
              },
              {
                name: "Hot Cocoa",
                description: "The perfect blend of chocolatey warmth and bedtime bliss—sip, savor, and sleep.",
                tag: "BEST SELLER",
                color: "bg-[#F2CEC8]/10",
                image: "/hot.png"
              },
              {
                name: "Cinnamon Chai",
                description: "A delicious chai blend with hints of cinnamon and cardamom.",
                color: "bg-[#F8F8FF]",
                image: "/chai.png"
              },
              {
                name: "Sleepy Berry",
                description: "A refreshingly bold berry flavor to quiet your mind and prepare you for dreamland.",
                color: "bg-[#F2CEC8]/10",
                image: "/sleepy.png"
              },
              {
                name: "Rose",
                description: "Soft floral notes of rose that make for a deliciously soothing tea before bed.",
                color: "bg-[#F8F8FF]",
                image: "/rose.png"
              },
            ].map((flavor, index) => (
              <div key={index} className={`rounded-lg overflow-hidden ${flavor.color} border border-gray-100 flex flex-col items-center`}>
                <div className="p-6 flex flex-col items-center text-center h-full">
                  <div className="h-8 mb-2">
                    {flavor.tag && (
                      <div className={`h-[20px] rounded-[4px] inline-flex items-center justify-center px-3 ${
                        flavor.tag === "NEW FLAVOR"
                          ? "bg-[#E7E7F4]"
                          : "bg-gradient-to-r from-[#7C7BF8]/20 via-[#E7E7F4] to-[#F2CEC8]/40"
                      }`}>
                        <span className="text-[10px] font-bold text-[#5D5CB6]">{flavor.tag}</span>
                      </div>
                    )}
                  </div>
                  <div className="w-[80px] h-[80px] bg-[#F0F0FF] rounded-full flex items-center justify-center mb-5 overflow-hidden">
                    <Image
                      src={flavor.image || "/placeholder.svg"}
                      alt={flavor.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-base mb-2">{flavor.name}</h3>
                  <p className="text-gray-600 text-sm">{flavor.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/shopping"
              className="bg-[#5D5CB6] text-white px-8 py-3 rounded-full font-medium hover:bg-[#5D5CB6]/90 transition-all duration-200 active:scale-95 inline-block"
            >
              Choose Your Flavors
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#F8F8FF]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to our most commonly asked questions.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How soon before bed should I drink Moonbrew?",
                answer:
                  "We recommend drinking Moonbrew 30 minutes before you plan to go to sleep for optimal results.",
              },
              {
                question: "Is Moonbrew safe to use every night?",
                answer:
                  "Yes, Moonbrew is formulated with natural ingredients and is safe for nightly use. It's non-habit forming and won't cause dependency.",
              },
              {
                question: "How many servings are in each pack?",
                answer: "Each pack contains 30 servings, which is a one-month supply when used nightly.",
              },
              {
                question: "Can I take Moonbrew with medications?",
                answer:
                  "While Moonbrew is made with natural ingredients, we recommend consulting with your healthcare provider before using if you're taking medications.",
              },
              {
                question: "What if Moonbrew doesn't work for me?",
                answer:
                  "We offer a 60-day money-back guarantee. If you're not satisfied with your results, simply contact us for a full refund.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="mb-4 bg-white rounded-lg p-6 hover:shadow-sm transition-shadow duration-300 text-center"
              >
                <h3 className="font-medium text-base mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#5D5CB6]/90 to-[#5D5CB6]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready for Your Best Sleep Ever?</h2>
          <p className="text-white/90 max-w-xl mx-auto mb-6 text-sm md:text-base">
            Join over 250,000 happy customers who have transformed their sleep with Moonbrew.
          </p>
          <Link
            href="/shopping"
            className="bg-white text-[#5D5CB6] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-200 active:scale-95 inline-block"
          >
            Get Started Now
          </Link>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center text-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M16 3H1V16H16V3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8H20L23 11V16H16V8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Free Shipping on Orders $60+
            </div>
            <div className="flex items-center text-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M3 10H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              60-Day Money Back Guarantee
            </div>
            <div className="flex items-center text-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 21V19C3 15.134 6.13401 12 10 12H14C17.866 12 21 15.134 21 19V21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              250,000+ Happy Customers
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page