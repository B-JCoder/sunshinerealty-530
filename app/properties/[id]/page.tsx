"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Heart, Share2, Phone, Mail, Calendar, Car, Camera } from "lucide-react"

// Mock property data - in real app, this would come from API
const getPropertyById = (id: string) => {
  const properties = {
    "1": {
      id: 1,
      title: "Modern Family Home",
      location: "Sacramento, CA",
      fullAddress: "1234 Maple Street, Sacramento, CA 95814",
      price: "$650,000",
      beds: 4,
      baths: 3,
      sqft: 2400,
      type: "For Sale",
      yearBuilt: 2018,
      lotSize: "0.25 acres",
      garage: 2,
      images: ["/images/house1.jpg", "/images/hero-bg.jpg", "/images/house3.jpg", "/images/house4.jpg"],
      description:
        "This stunning modern family home offers the perfect blend of contemporary design and comfortable living. Located in a desirable Sacramento neighborhood, this property features an open-concept floor plan, gourmet kitchen with stainless steel appliances, and a spacious master suite with walk-in closet.",
      features: [
        "Open concept floor plan",
        "Gourmet kitchen with island",
        "Master suite with walk-in closet",
        "Hardwood floors throughout",
        "Two-car garage",
        "Landscaped backyard",
        "Energy-efficient appliances",
        "Central air conditioning",
      ],
      agent: {
        name: "Jennifer Martinez",
        phone: "(530) 123-4567",
        email: "jennifer@sunshinerealty530.com",
        image: "/placeholder.svg?height=100&width=100",
      },
    },
  }
  return properties[id as keyof typeof properties]
}

export default function PropertyDetailPage() {
  const params = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const property = getPropertyById(params.id as string)

  if (!property) {
    return <div>Property not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-orange-500">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/properties" className="hover:text-orange-500">
            Properties
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{property.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative mb-4">
                <img
                  src={property.images[currentImageIndex] || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">{property.type}</Badge>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/90 backdrop-blur-sm"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                    <Camera className="h-4 w-4" />
                    <span className="ml-1">{property.images.length}</span>
                  </Button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden ${
                      currentImageIndex === index ? "ring-2 ring-orange-400" : ""
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.fullAddress}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-6">
                  {property.price}
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg">
                    <Bed className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="font-semibold">{property.beds}</div>
                      <div className="text-sm text-gray-600">Bedrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg">
                    <Bath className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="font-semibold">{property.baths}</div>
                      <div className="text-sm text-gray-600">Bathrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg">
                    <Square className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="font-semibold">{property.sqft}</div>
                      <div className="text-sm text-gray-600">Sq Ft</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg">
                    <Car className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="font-semibold">{property.garage}</div>
                      <div className="text-sm text-gray-600">Garage</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details Table */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Details</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Year Built:</span>
                      <span className="font-semibold">{property.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Lot Size:</span>
                      <span className="font-semibold">{property.lotSize}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Property Type:</span>
                      <span className="font-semibold">Single Family</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Parking:</span>
                      <span className="font-semibold">{property.garage} Car Garage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Agent</h3>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={property.agent.image || "/placeholder.svg"}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{property.agent.name}</h4>
                  <p className="text-gray-600">Senior Real Estate Agent</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Call {property.agent.phone}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-orange-400 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Agent
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-orange-400 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Tour
                </Button>
              </div>
            </div>

            {/* Mortgage Calculator */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mortgage Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Home Price</label>
                  <input
                    type="text"
                    value={property.price}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment</label>
                  <input
                    type="text"
                    placeholder="$130,000 (20%)"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate</label>
                  <input type="text" placeholder="6.5%" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white">
                  Calculate Payment
                </Button>
              </div>
            </div>

            {/* Similar Properties */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Similar Properties</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <img
                      src={`/images/house${i + 1}.jpg`}
                      alt="Similar property"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">Modern Home</h4>
                      <p className="text-xs text-gray-600">Sacramento, CA</p>
                      <p className="text-sm font-bold text-orange-500">$675,000</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
