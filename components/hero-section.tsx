"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, MapPin, Home, DollarSign } from "lucide-react"

export default function HeroSection() {
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "all",
    priceMin: "",
    priceMax: "",
  })

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchData.location) params.set("location", searchData.location)
    if (searchData.propertyType !== "all") params.set("type", searchData.propertyType)
    if (searchData.priceMin) params.set("minPrice", searchData.priceMin)
    if (searchData.priceMax) params.set("maxPrice", searchData.priceMax)

    window.location.href = `/properties?${params.toString()}`
  }

  const handleInputChange = (field: string, value: string) => {
    setSearchData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://v1.pinimg.com/videos/iht/720p/c7/91/4c/c7914c3b16e97d67a1c63a7e90803502.mp4"
            type="video/mp4"
          />
          <img
            src="/images/hero-bg.jpg"
            alt="Luxury home background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="whitespace-nowrap">Find Your Dream Home</span>
        </h1>

        <div className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
          <p className="mb-1">Discover exceptional properties in California's top neighborhoods.</p>
          <p>Your journey to luxury living starts here.</p>
        </div>

        {/* Search Form */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Location */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  <MapPin className="inline h-4 w-4 mr-1 text-orange-500" />
                  Location
                </label>
                <Input
                  placeholder="City, State, or ZIP"
                  value={searchData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="h-11 rounded-lg"
                />
              </div>

              {/* Property Type */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  <Home className="inline h-4 w-4 mr-1 text-orange-500" />
                  Property Type
                </label>
                <Select
                  value={searchData.propertyType}
                  onValueChange={(value) => handleInputChange("propertyType", value)}
                >
                  <SelectTrigger className="h-11 rounded-lg">
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
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  <DollarSign className="inline h-4 w-4 mr-1 text-orange-500" />
                  Price Range
                </label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Min"
                    value={searchData.priceMin}
                    onChange={(e) => handleInputChange("priceMin", e.target.value)}
                    className="h-11 rounded-lg w-full"
                  />
                  <Input
                    placeholder="Max"
                    value={searchData.priceMax}
                    onChange={(e) => handleInputChange("priceMax", e.target.value)}
                    className="h-11 rounded-lg w-full"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button
                  onClick={handleSearch}
                  className="w-full h-11 bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
