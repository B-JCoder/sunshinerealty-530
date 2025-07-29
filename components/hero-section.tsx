"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Home, DollarSign } from "lucide-react"

export default function HeroSection() {
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "all",
    priceMin: "",
    priceMax: "",
  })

  const handleSearch = () => {
    // Navigate to properties page with search parameters
    const params = new URLSearchParams()
    if (searchData.location) params.set("location", searchData.location)
    if (searchData.propertyType !== "all") params.set("type", searchData.propertyType)
    if (searchData.priceMin) params.set("minPrice", searchData.priceMin)
    if (searchData.priceMax) params.set("maxPrice", searchData.maxPrice)

    window.location.href = `/properties?${params.toString()}`
  }

  const handleInputChange = (field: string, value: string) => {
    setSearchData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://v1.pinimg.com/videos/iht/720p/c7/91/4c/c7914c3b16e97d67a1c63a7e90803502.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="/images/hero-bg.jpg"
            alt="Luxury home background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        {/* Main Headline - Single Line */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="whitespace-nowrap">Find Your Dream Home</span>
        </h1>

        {/* Subheading - Two Lines */}
        <div className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
          <p className="mb-2">Discover exceptional properties in California's most prestigious neighborhoods.</p>
          <p>Your journey to luxury living starts here.</p>
        </div>

        {/* Search/Filter Form */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Location */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  <MapPin className="inline h-4 w-4 mr-1 text-orange-500" />
                  Location
                </label>
                <Input
                  placeholder="City, State, or ZIP"
                  value={searchData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl"
                />
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  <Home className="inline h-4 w-4 mr-1 text-orange-500" />
                  Property Type
                </label>
                <Select
                  value={searchData.propertyType}
                  onValueChange={(value) => handleInputChange("propertyType", value)}
                >
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  <DollarSign className="inline h-4 w-4 mr-1 text-orange-500" />
                  Price Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Min"
                    value={searchData.priceMin}
                    onChange={(e) => handleInputChange("priceMin", e.target.value)}
                    className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl"
                  />
                  <Input
                    placeholder="Max"
                    value={searchData.priceMax}
                    onChange={(e) => handleInputChange("priceMax", e.target.value)}
                    className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-transparent">Search</label>
                <Button
                  onClick={handleSearch}
                  className="w-full h-12 bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
