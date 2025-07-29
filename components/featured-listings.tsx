"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Bed, Bath, Square, Eye } from "lucide-react"

export default function FeaturedListings() {
  const [favorites, setFavorites] = useState<number[]>([])

  const properties = [
    {
      id: 1,
      title: "Modern Family Home",
      location: "Sacramento, CA",
      price: "$650,000",
      beds: 4,
      baths: 3,
      sqft: 2400,
      type: "For Sale",
      image: "/images/house1.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Luxury Contemporary Villa",
      location: "San Francisco, CA",
      price: "$1,200,000",
      beds: 5,
      baths: 4,
      sqft: 3200,
      type: "For Sale",
      image: "/images/hero-bg.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Cozy Winter Retreat",
      location: "Lake Tahoe, CA",
      price: "$850,000",
      beds: 3,
      baths: 2,
      sqft: 1800,
      type: "For Sale",
      image: "/images/house2.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Modern Architectural Marvel",
      location: "Palo Alto, CA",
      price: "$2,100,000",
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: "For Sale",
      image: "/images/house3.jpg",
      featured: true,
    },
    {
      id: 5,
      title: "Contemporary Wood & Steel",
      location: "Berkeley, CA",
      price: "$1,800,000",
      beds: 4,
      baths: 3,
      sqft: 2600,
      type: "For Sale",
      image: "/images/house4.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Sleek Urban Home",
      location: "Oakland, CA",
      price: "$950,000",
      beds: 3,
      baths: 2,
      sqft: 2200,
      type: "For Sale",
      image: "/images/house5.jpg",
      featured: false,
    },
  ]

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleViewDetails = (propertyId: number) => {
    window.location.href = `/properties/${propertyId}`
  }

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Properties
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Handpicked properties that offer the best value and location
        </p>
      </div>

      {properties && properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=256&width=400"
                  }}
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${
                      property.type === "For Sale" ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
                    } text-white`}
                  >
                    {property.type}
                  </Badge>
                </div>
                {property.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white">Featured</Badge>
                  </div>
                )}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{property.title}</h3>
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4">
                  {property.price}
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.baths} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>

                <Button
                  onClick={() => handleViewDetails(property.id)}
                  className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No featured properties available at the moment.</p>
        </div>
      )}

      <div className="text-center mt-12">
        <Button
          variant="outline"
          size="lg"
          className="border-orange-400 text-orange-500 hover:bg-orange-50 px-8 bg-transparent"
          onClick={() => (window.location.href = "/properties")}
        >
          View All Properties
        </Button>
      </div>
    </section>
  )
}
