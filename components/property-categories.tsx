"use client"

import { Button } from "@/components/ui/button"
import { Home, Building, Factory, Hammer } from "lucide-react"

export default function PropertyCategories() {
  const categories = [
    {
      icon: Home,
      title: "Residential",
      description: "Find your perfect home",
      count: "250+ Properties",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Building,
      title: "Commercial",
      description: "Office & retail spaces",
      count: "80+ Properties",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Warehouses & factories",
      count: "45+ Properties",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Hammer,
      title: "New Projects",
      description: "Under construction",
      count: "25+ Projects",
      color: "from-orange-400 to-yellow-400",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 -mx-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore by{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to buy, rent, or invest, we have the perfect property for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories?.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <p className="text-sm font-semibold text-orange-500 mb-6">{category.count}</p>
                <Button
                  variant="outline"
                  className="w-full border-gray-300 hover:border-orange-400 hover:text-orange-500 group-hover:bg-orange-50 bg-transparent"
                >
                  Explore
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
