"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"

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

interface PropertyFiltersProps {
  properties: Property[]
  onFilter: (filteredProperties: Property[]) => void
}

export default function PropertyFilters({ properties, onFilter }: PropertyFiltersProps) {
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "all",
    priceRange: [0, 2000000],
    bedrooms: "any",
    bathrooms: "any",
    sqftRange: [0, 5000],
    featured: false,
    forSale: false,
    forRent: false,
  })

  const [activeFilters, setActiveFilters] = useState<string[]>([])

  useEffect(() => {
    applyFilters()
  }, [filters])

  const applyFilters = () => {
    const filtered = properties.filter((property) => {
      // Location filter
      if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false
      }

      // Property type filter
      if (filters.propertyType && filters.propertyType !== "all") {
        if (property.type.toLowerCase() !== filters.propertyType.toLowerCase()) {
          return false
        }
      }

      // Price range filter
      const price = Number.parseInt(property.price.replace(/[$,]/g, ""))
      if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
        return false
      }

      // Bedrooms filter
      if (filters.bedrooms && filters.bedrooms !== "any" && property.beds < Number.parseInt(filters.bedrooms)) {
        return false
      }

      // Bathrooms filter
      if (filters.bathrooms && filters.bathrooms !== "any" && property.baths < Number.parseInt(filters.bathrooms)) {
        return false
      }

      // Square footage filter
      if (property.sqft < filters.sqftRange[0] || property.sqft > filters.sqftRange[1]) {
        return false
      }

      // Featured filter
      if (filters.featured && !property.featured) {
        return false
      }

      // Sale/Rent filter
      if (filters.forSale && property.type !== "For Sale") {
        return false
      }
      if (filters.forRent && property.type !== "For Rent") {
        return false
      }

      return true
    })

    onFilter(filtered)
    updateActiveFilters()
  }

  const updateActiveFilters = () => {
    const active: string[] = []

    if (filters.location) active.push(`Location: ${filters.location}`)
    if (filters.propertyType && filters.propertyType !== "all") active.push(`Type: ${filters.propertyType}`)
    if (filters.bedrooms) active.push(`${filters.bedrooms}+ beds`)
    if (filters.bathrooms) active.push(`${filters.bathrooms}+ baths`)
    if (filters.featured) active.push("Featured")
    if (filters.forSale) active.push("For Sale")
    if (filters.forRent) active.push("For Rent")

    setActiveFilters(active)
  }

  const clearFilter = (filterToRemove: string) => {
    const newFilters = { ...filters }

    if (filterToRemove.startsWith("Location:")) {
      newFilters.location = ""
    } else if (filterToRemove.startsWith("Type:")) {
      newFilters.propertyType = ""
    } else if (filterToRemove.includes("beds")) {
      newFilters.bedrooms = ""
    } else if (filterToRemove.includes("baths")) {
      newFilters.bathrooms = ""
    } else if (filterToRemove === "Featured") {
      newFilters.featured = false
    } else if (filterToRemove === "For Sale") {
      newFilters.forSale = false
    } else if (filterToRemove === "For Rent") {
      newFilters.forRent = false
    }

    setFilters(newFilters)
  }

  const clearAllFilters = () => {
    setFilters({
      location: "",
      propertyType: "all",
      priceRange: [0, 2000000],
      bedrooms: "any",
      bathrooms: "any",
      sqftRange: [0, 5000],
      featured: false,
      forSale: false,
      forRent: false,
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </h3>
        {activeFilters.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearAllFilters}
            className="text-orange-500 border-orange-400 hover:bg-orange-50 bg-transparent"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-orange-50 border-orange-200 text-orange-700 cursor-pointer hover:bg-orange-100"
                onClick={() => clearFilter(filter)}
              >
                {filter}
                <X className="h-3 w-3 ml-1" />
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <Input
            placeholder="Enter city, state, or ZIP"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="border-gray-300 focus:border-orange-400 focus:ring-orange-400"
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <Select
            value={filters.propertyType}
            onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
          >
            <SelectTrigger className="border-gray-300 focus:border-orange-400 focus:ring-orange-400">
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range: ${filters.priceRange[0].toLocaleString()} - ${filters.priceRange[1].toLocaleString()}
          </label>
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
            max={2000000}
            min={0}
            step={50000}
            className="w-full"
          />
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Bedrooms</label>
          <Select value={filters.bedrooms} onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}>
            <SelectTrigger className="border-gray-300 focus:border-orange-400 focus:ring-orange-400">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Bathrooms</label>
          <Select value={filters.bathrooms} onValueChange={(value) => setFilters({ ...filters, bathrooms: value })}>
            <SelectTrigger className="border-gray-300 focus:border-orange-400 focus:ring-orange-400">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Square Footage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Square Footage: {filters.sqftRange[0]} - {filters.sqftRange[1]} sqft
          </label>
          <Slider
            value={filters.sqftRange}
            onValueChange={(value) => setFilters({ ...filters, sqftRange: value })}
            max={5000}
            min={0}
            step={100}
            className="w-full"
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="featured"
              checked={filters.featured}
              onCheckedChange={(checked) => setFilters({ ...filters, featured: checked as boolean })}
            />
            <label htmlFor="featured" className="text-sm font-medium text-gray-700">
              Featured Properties Only
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="forSale"
              checked={filters.forSale}
              onCheckedChange={(checked) => setFilters({ ...filters, forSale: checked as boolean })}
            />
            <label htmlFor="forSale" className="text-sm font-medium text-gray-700">
              For Sale
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="forRent"
              checked={filters.forRent}
              onCheckedChange={(checked) => setFilters({ ...filters, forRent: checked as boolean })}
            />
            <label htmlFor="forRent" className="text-sm font-medium text-gray-700">
              For Rent
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
