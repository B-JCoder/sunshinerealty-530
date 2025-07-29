"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PropertyCard from "@/components/property-card"
import PropertyFilters from "@/components/property-filters"
import { Button } from "@/components/ui/button"
import { Grid, List, SlidersHorizontal } from "lucide-react"

const defaultProperties = [
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
    description: "Beautiful modern home with spacious rooms and updated kitchen.",
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
    description: "Stunning contemporary villa with premium finishes and landscaping.",
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
    description: "Charming home perfect for winter getaways with modern amenities.",
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
    description: "Award-winning modern design with floor-to-ceiling windows.",
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
    description: "Unique blend of natural materials and modern architecture.",
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
    description: "Contemporary urban living with premium finishes throughout.",
  },
  {
    id: 7,
    title: "Traditional Elegance",
    location: "Davis, CA",
    price: "$725,000",
    beds: 4,
    baths: 3,
    sqft: 2500,
    type: "For Sale",
    image: "/images/house6.jpg",
    featured: false,
    description: "Classic design meets modern comfort in this elegant home.",
  },
  {
    id: 8,
    title: "Minimalist Modern",
    location: "Roseville, CA",
    price: "$1,100,000",
    beds: 3,
    baths: 2,
    sqft: 2000,
    type: "For Sale",
    image: "/images/house7.jpg",
    featured: false,
    description: "Clean lines and open spaces define this modern masterpiece.",
  },
]

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [properties, setProperties] = useState(defaultProperties)
  const [filteredProperties, setFilteredProperties] = useState(defaultProperties)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Handle URL search parameters
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search)
      const location = urlParams.get("location")
      const type = urlParams.get("type")
      const minPrice = urlParams.get("minPrice")
      const maxPrice = urlParams.get("maxPrice")

      if (location || type || minPrice || maxPrice) {
        // Apply initial filters based on URL parameters
        let filtered = [...properties]

        if (location) {
          filtered = filtered.filter((prop) => prop.location.toLowerCase().includes(location.toLowerCase()))
        }

        if (type) {
          filtered = filtered.filter((prop) => prop.type.toLowerCase().includes(type.toLowerCase()))
        }

        setFilteredProperties(filtered)
      }
    } catch (err) {
      console.error("Error processing URL parameters:", err)
      setError("Error loading search parameters")
    }
  }, [properties])

  const handleFilterChange = (filtered: typeof properties) => {
    try {
      setFilteredProperties(filtered || [])
    } catch (err) {
      console.error("Error applying filters:", err)
      setError("Error applying filters")
    }
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-8">{error}</p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white"
            >
              Try Again
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-orange-400 to-yellow-400 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Properties for Sale</h1>
            <p className="text-xl opacity-90">Discover your perfect home from our premium collection</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            {properties && properties.length > 0 && (
              <PropertyFilters properties={properties} onFilter={handleFilterChange} />
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <span className="text-gray-600">{filteredProperties?.length || 0} properties found</span>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-gradient-to-r from-orange-400 to-yellow-400" : ""}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-gradient-to-r from-orange-400 to-yellow-400" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Properties Grid/List */}
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading properties...</p>
              </div>
            ) : filteredProperties && filteredProperties.length > 0 ? (
              <div
                className={`${
                  viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"
                }`}
              >
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
                <Button
                  onClick={() => setFilteredProperties(properties)}
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {filteredProperties && filteredProperties.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button className="bg-gradient-to-r from-orange-400 to-yellow-400">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
