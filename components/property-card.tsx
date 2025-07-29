"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Bed, Bath, Square, Eye, Phone } from "lucide-react"

interface Property {
  id: number
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: number
  type: string
  image: string
  featured: boolean
  description: string
}

interface PropertyCardProps {
  property: Property
  viewMode: "grid" | "list"
}

export default function PropertyCard({ property, viewMode }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleViewDetails = () => {
    window.location.href = `/properties/${property.id}`
  }

  const handleContactAgent = () => {
    // Open contact modal or navigate to contact page
    console.log("Contact agent for property:", property.id)
  }

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-80 h-64 md:h-auto overflow-hidden">
            <img
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
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
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            >
              <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {property.location}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{property.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4">
              {property.price}
            </div>

            {/* Property Details */}
            <div className="flex items-center space-x-6 text-gray-600 mb-6">
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

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button
                onClick={handleViewDetails}
                className="flex-1 bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
              <Button
                onClick={handleContactAgent}
                variant="outline"
                className="border-orange-400 text-orange-500 hover:bg-orange-50 bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grid view (default)
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
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
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
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
          onClick={handleViewDetails}
          className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white"
        >
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </div>
    </div>
  )
}
