"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Phone, Mail, Star, Award, Search, MapPin } from "lucide-react"

const agents = [
  {
    id: 1,
    name: "Jennifer Martinez",
    title: "Senior Real Estate Agent",
    specialization: "Luxury Homes",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    sales: 150,
    experience: "8 years",
    phone: "(530) 123-4567",
    email: "jennifer@sunshinerealty530.com",
    bio: "Jennifer specializes in luxury residential properties and has been helping families find their dream homes for over 8 years. Her attention to detail and market knowledge make her a trusted advisor.",
    areas: ["Sacramento", "Roseville", "Folsom"],
    languages: ["English", "Spanish"],
    certifications: ["CRS", "ABR", "SRS"],
  },
  {
    id: 2,
    name: "Robert Kim",
    title: "Commercial Specialist",
    specialization: "Commercial Properties",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    sales: 120,
    experience: "10 years",
    phone: "(530) 123-4568",
    email: "robert@sunshinerealty530.com",
    bio: "Robert is our go-to expert for commercial real estate transactions. With a background in business development, he understands the unique needs of commercial buyers and investors.",
    areas: ["Sacramento", "San Francisco", "Oakland"],
    languages: ["English", "Korean", "Mandarin"],
    certifications: ["CCIM", "SIOR"],
  },
  {
    id: 3,
    name: "Amanda Foster",
    title: "First-Time Buyer Specialist",
    specialization: "Residential Sales",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    sales: 200,
    experience: "6 years",
    phone: "(530) 123-4569",
    email: "amanda@sunshinerealty530.com",
    bio: "Amanda has a passion for helping first-time homebuyers navigate the real estate process. Her patient approach and extensive knowledge make the home buying journey smooth and stress-free.",
    areas: ["Davis", "Woodland", "Vacaville"],
    languages: ["English"],
    certifications: ["ABR", "PSA", "MRP"],
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    title: "Investment Properties Expert",
    specialization: "Investment Properties",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    sales: 180,
    experience: "12 years",
    phone: "(530) 123-4570",
    email: "carlos@sunshinerealty530.com",
    bio: "Carlos specializes in investment properties and has helped numerous clients build successful real estate portfolios. His analytical approach and market insights are invaluable for investors.",
    areas: ["Sacramento", "Stockton", "Modesto"],
    languages: ["English", "Spanish"],
    certifications: ["CCIM", "CPM", "CRS"],
  },
  {
    id: 5,
    name: "Sarah Johnson",
    title: "Luxury Home Specialist",
    specialization: "Luxury Properties",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    sales: 95,
    experience: "5 years",
    phone: "(530) 123-4571",
    email: "sarah@sunshinerealty530.com",
    bio: "Sarah brings a fresh perspective to luxury real estate with her background in interior design. She helps clients envision the potential in every property.",
    areas: ["Napa", "Sonoma", "Marin"],
    languages: ["English", "French"],
    certifications: ["CLHMS", "SRS"],
  },
  {
    id: 6,
    name: "Michael Chen",
    title: "New Construction Specialist",
    specialization: "New Developments",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    sales: 110,
    experience: "7 years",
    phone: "(530) 123-4572",
    email: "michael@sunshinerealty530.com",
    bio: "Michael specializes in new construction and development projects. His engineering background helps clients understand the technical aspects of new builds.",
    areas: ["Elk Grove", "Rancho Cordova", "Citrus Heights"],
    languages: ["English", "Mandarin"],
    certifications: ["NAHB", "CGB"],
  },
]

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-orange-400 to-yellow-400 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Expert Agents</h1>
            <p className="text-xl opacity-90">Professional, experienced, and dedicated to your success</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search by name or specialization"
                className="pl-10 border-gray-300 focus:border-orange-400 focus:ring-orange-400"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search by area"
                className="pl-10 border-gray-300 focus:border-orange-400 focus:ring-orange-400"
              />
            </div>
            <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white">
              Search Agents
            </Button>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Agent Image */}
              <div className="relative overflow-hidden">
                <img
                  src={agent.image || "/placeholder.svg"}
                  alt={agent.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white">
                    <Award className="h-3 w-3 mr-1" />
                    Top Agent
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-semibold text-sm">{agent.rating}</span>
                      </div>
                      <div className="text-sm text-gray-600">{agent.sales}+ Sales</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agent Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{agent.name}</h3>
                <p className="text-orange-500 font-medium mb-2">{agent.title}</p>
                <p className="text-gray-600 text-sm mb-4">{agent.specialization}</p>

                {/* Bio */}
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{agent.bio}</p>

                {/* Areas Served */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Areas Served:</h4>
                  <div className="flex flex-wrap gap-1">
                    {agent.areas.map((area, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Languages:</h4>
                  <p className="text-sm text-gray-600">{agent.languages.join(", ")}</p>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Certifications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {agent.certifications.map((cert, index) => (
                      <Badge key={index} className="bg-gray-100 text-gray-700 text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-500">{agent.experience}</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-500">{agent.sales}+</div>
                    <div className="text-xs text-gray-600">Properties Sold</div>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-2">
                  <Button
                    className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white"
                    size="sm"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-orange-400 text-orange-500 hover:bg-orange-50 bg-transparent"
                    size="sm"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    size="sm"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Our Team?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our experienced agents are here to help you achieve your real estate goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Call (530) 123-4567
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
