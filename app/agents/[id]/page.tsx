"use client"

import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  Star,
  Award,
  MapPin,
  Calendar,
  MessageSquare,
  Globe,
  Linkedin,
  Facebook,
  Twitter,
  Home,
  Users,
} from "lucide-react"

// Mock agent data
const getAgentById = (id: string) => {
  const agents = {
    "1": {
      id: 1,
      name: "Jennifer Martinez",
      title: "Senior Real Estate Agent",
      specialization: "Luxury Homes",
      image: "/placeholder.svg?height=400&width=400",
      coverImage: "/images/hero-bg.jpg",
      rating: 4.9,
      sales: 150,
      experience: "8 years",
      phone: "(530) 123-4567",
      email: "jennifer@sunshinerealty530.com",
      bio: "Jennifer Martinez is a dedicated real estate professional with over 8 years of experience in the luxury home market. She has built a reputation for her exceptional client service, market knowledge, and ability to negotiate the best deals for her clients. Jennifer's attention to detail and commitment to excellence have made her one of the top-performing agents at Sunshine Realty.",
      fullBio:
        "Born and raised in Sacramento, Jennifer has an intimate knowledge of the local market and communities. She began her real estate career after completing her MBA in Business Administration, bringing a strategic approach to every transaction. Jennifer specializes in luxury residential properties, working with discerning clients who demand the highest level of service. Her multilingual abilities and cultural sensitivity have made her particularly successful with international buyers and sellers. When she's not helping clients find their dream homes, Jennifer enjoys hiking in the Sierra Nevada mountains and volunteering at local animal shelters.",
      areas: ["Sacramento", "Roseville", "Folsom", "El Dorado Hills", "Granite Bay"],
      languages: ["English", "Spanish", "Portuguese"],
      certifications: [
        "CRS - Certified Residential Specialist",
        "ABR - Accredited Buyer's Representative",
        "SRS - Seller Representative Specialist",
        "CLHMS - Certified Luxury Home Marketing Specialist",
      ],
      education: ["MBA - Business Administration, UC Davis", "BA - Communications, Sacramento State"],
      achievements: [
        "Top 1% of agents nationwide (2023)",
        "Luxury Home Sales Award (2022, 2023)",
        "Client Satisfaction Award (2021, 2022, 2023)",
        "$50M+ in sales volume (2023)",
      ],
      recentSales: [
        {
          address: "1234 Luxury Lane, Granite Bay",
          price: "$1,250,000",
          date: "Dec 2023",
          image: "/images/house1.jpg",
        },
        {
          address: "5678 Executive Dr, Roseville",
          price: "$950,000",
          date: "Nov 2023",
          image: "/images/house3.jpg",
        },
        {
          address: "9012 Premium Ct, Folsom",
          price: "$875,000",
          date: "Oct 2023",
          image: "/images/house4.jpg",
        },
      ],
      testimonials: [
        {
          name: "Sarah & Mike Johnson",
          text: "Jennifer made our home buying experience absolutely seamless. Her knowledge of the luxury market and attention to detail are unmatched.",
          rating: 5,
        },
        {
          name: "David Chen",
          text: "As an investor, I needed someone who understood market trends. Jennifer's insights helped me make profitable decisions.",
          rating: 5,
        },
      ],
      socialMedia: {
        linkedin: "https://linkedin.com/in/jennifer-martinez",
        facebook: "https://facebook.com/jennifer.martinez.realtor",
        twitter: "https://twitter.com/jmartinez_homes",
      },
    },
  }
  return agents[id as keyof typeof agents]
}

export default function AgentProfilePage() {
  const params = useParams()
  const agent = getAgentById(params.id as string)

  if (!agent) {
    return <div>Agent not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={agent.coverImage || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <div className="flex items-end space-x-6">
            <img
              src={agent.image || "/placeholder.svg"}
              alt={agent.name}
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">{agent.name}</h1>
              <p className="text-xl opacity-90 mb-2">{agent.title}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-semibold">{agent.rating}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-1" />
                  <span>{agent.sales}+ Sales</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-1" />
                  <span>{agent.experience} Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Jennifer</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">{agent.bio}</p>
                <p className="text-gray-700 leading-relaxed">{agent.fullBio}</p>
              </div>
            </section>

            {/* Specializations */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Specializations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl">
                  <Home className="h-12 w-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Homes</h3>
                  <p className="text-gray-700">
                    Specializing in high-end residential properties with premium amenities and prime locations.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                  <Users className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">International Clients</h3>
                  <p className="text-gray-700">
                    Extensive experience working with international buyers and sellers from diverse backgrounds.
                  </p>
                </div>
              </div>
            </section>

            {/* Recent Sales */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Sales</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {agent.recentSales.map((sale, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={sale.image || "/placeholder.svg"}
                      alt={sale.address}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2">{sale.address}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-orange-500">{sale.price}</span>
                        <span className="text-sm text-gray-600">{sale.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
              <div className="space-y-6">
                {agent.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Jennifer</h3>

              <div className="space-y-4 mb-6">
                <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Call {agent.phone}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-orange-400 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-orange-400 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-orange-400 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
              </div>

              {/* Social Media */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Connect on Social Media</h4>
                <div className="flex space-x-3">
                  <Button size="sm" variant="outline" className="border-gray-300 hover:border-blue-500 bg-transparent">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-300 hover:border-blue-500 bg-transparent">
                    <Facebook className="h-4 w-4 text-blue-600" />
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-300 hover:border-blue-500 bg-transparent">
                    <Twitter className="h-4 w-4 text-blue-400" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Properties Sold (2023)</span>
                  <span className="font-bold text-orange-500">{agent.sales}+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Sale Price</span>
                  <span className="font-bold text-orange-500">$875K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Days on Market</span>
                  <span className="font-bold text-orange-500">18 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Client Rating</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-bold text-orange-500">{agent.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas Served */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Areas Served</h3>
              <div className="space-y-2">
                {agent.areas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {agent.languages.map((language, index) => (
                  <Badge key={index} className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white">
                    <Globe className="h-3 w-3 mr-1" />
                    {language}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-2">
                {agent.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-700 text-sm">{cert}</span>
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
