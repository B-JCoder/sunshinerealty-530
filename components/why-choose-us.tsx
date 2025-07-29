"use client"

import { Shield, Users, Award, Clock, TrendingUp, HeartHandshake } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Licensed professionals with verified listings and secure transactions",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced agents with deep local market knowledge",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in customer service and sales",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your real estate needs",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Data-driven analysis and market trends to guide your decisions",
    },
    {
      icon: HeartHandshake,
      title: "Personal Touch",
      description: "Dedicated service tailored to your unique requirements",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Sunshine Realty
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience in California real estate, we're committed to making your property journey
            smooth and successful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium">Expert Agents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
