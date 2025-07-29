"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Star, Award } from "lucide-react"

export default function OurAgents() {
  const agents = [
    {
      id: 1,
      name: "Jennifer Martinez",
      title: "Senior Real Estate Agent",
      specialization: "Luxury Homes",
      image: "/images/agents/jennifer-martinez.jpg",
      rating: 4.9,
      sales: 150,
      experience: "8 years",
      phone: "(530) 123-4567",
      email: "jennifer@sunshinerealty530.com",
    },
    {
      id: 2,
      name: "Robert Kim",
      title: "Commercial Specialist",
      specialization: "Commercial Properties",
      image: "/images/agents/robert-kim.jpg",
      rating: 4.8,
      sales: 120,
      experience: "10 years",
      phone: "(530) 123-4568",
      email: "robert@sunshinerealty530.com",
    },
    {
      id: 3,
      name: "Amanda Foster",
      title: "First-Time Buyer Specialist",
      specialization: "Residential Sales",
      image: "/images/agents/amanda-foster.jpg",
      rating: 4.9,
      sales: 200,
      experience: "6 years",
      phone: "(530) 123-4569",
      email: "amanda@sunshinerealty530.com",
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      title: "Investment Properties Expert",
      specialization: "Investment Properties",
      image: "/images/agents/carlos-rodriguez.jpg",
      rating: 4.7,
      sales: 180,
      experience: "12 years",
      phone: "(530) 123-4570",
      email: "carlos@sunshinerealty530.com",
    },
  ]

  const handleViewProfile = (agentId: number) => {
    window.location.href = `/agents/${agentId}`
  }

  return (
    <section id="agents" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Expert Agents
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced team of real estate professionals is here to guide you through every step of your property
            journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
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
              </div>

              {/* Agent Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{agent.name}</h3>
                <p className="text-orange-500 font-medium mb-2">{agent.title}</p>
                <p className="text-gray-600 text-sm mb-4">{agent.specialization}</p>

                {/* Stats */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{agent.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Properties Sold:</span>
                    <span className="font-semibold">{agent.sales}+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-semibold">{agent.experience}</span>
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
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    size="sm"
                    onClick={() => handleViewProfile(agent.id)}
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-orange-400 text-orange-500 hover:bg-orange-50 px-8 bg-transparent"
            onClick={() => (window.location.href = "/agents")}
          >
            View All Agents
          </Button>
        </div>
      </div>
    </section>
  )
}
