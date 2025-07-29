"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Home, TrendingUp, Shield, Heart, Clock, Star, MapPin, Phone, Mail, Calendar } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Home, number: "500+", label: "Properties Sold", color: "text-blue-600" },
    { icon: Users, number: "1000+", label: "Happy Clients", color: "text-green-600" },
    { icon: Award, number: "15+", label: "Years Experience", color: "text-purple-600" },
    { icon: TrendingUp, number: "50+", label: "Expert Agents", color: "text-orange-600" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We build lasting relationships through honest, transparent communication and ethical practices.",
    },
    {
      icon: Heart,
      title: "Client-Centered Service",
      description: "Your dreams and goals are our priority. We listen, understand, and deliver personalized solutions.",
    },
    {
      icon: TrendingUp,
      title: "Market Excellence",
      description: "Deep market knowledge and data-driven insights help you make informed real estate decisions.",
    },
    {
      icon: Clock,
      title: "Timely Results",
      description: "We respect your time and work efficiently to achieve your real estate goals on schedule.",
    },
  ]

  const timeline = [
    {
      year: "2009",
      title: "Founded",
      description:
        "Sunshine Realty was established with a vision to transform the real estate experience in California.",
    },
    {
      year: "2012",
      title: "First 100 Sales",
      description: "Reached our first major milestone, establishing ourselves as a trusted local agency.",
    },
    {
      year: "2015",
      title: "Team Expansion",
      description: "Grew to 25 agents and opened our second office in Sacramento.",
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description: "Launched our advanced online platform and virtual tour technology.",
    },
    {
      year: "2020",
      title: "Market Leadership",
      description: "Became the #1 rated real estate agency in Northern California.",
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Now serving clients across California with 50+ expert agents and 1000+ satisfied clients.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white mb-6">
              About Sunshine Realty
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Real Estate
              </span>{" "}
              Partner
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 15 years, Sunshine Realty has been helping families and investors find their perfect properties
              in California. We combine local expertise with innovative technology to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white"
              >
                <Users className="h-5 w-5 mr-2" />
                Meet Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-500 hover:bg-orange-50 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2009 by a team of passionate real estate professionals, Sunshine Realty began with a simple
                mission: to make the real estate process transparent, efficient, and enjoyable for everyone involved.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a small local agency has grown into one of California's most trusted real estate
                companies. We've helped over 1,000 families find their dream homes and assisted countless investors in
                building successful property portfolios.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Today, we continue to innovate and adapt to the changing real estate landscape while maintaining our
                core values of integrity, excellence, and client satisfaction.
              </p>
              <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule a Consultation
              </Button>
            </div>
            <div className="relative">
              <img src="/images/hero-bg.jpg" alt="Sunshine Realty Office" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                    <div className="text-gray-600">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the exceptional service we provide to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming California's premier real estate agency.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-yellow-400"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div className="ml-20 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white mr-4">
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Real Estate Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you find your dream home or sell your property for the best price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              <MapPin className="h-5 w-5 mr-2" />
              Find Properties
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Mail className="h-5 w-5 mr-2" />
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
