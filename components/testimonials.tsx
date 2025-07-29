"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "First-time Homebuyer",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Sunshine Realty made my dream of homeownership a reality. Their team was incredibly patient and knowledgeable, guiding me through every step of the process. I couldn't be happier with my new home!",
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As an investor, I need agents who understand the market inside and out. Sunshine Realty has helped me build a profitable portfolio with their expert insights and dedication to finding the right properties.",
    },
    {
      name: "Emily Rodriguez",
      role: "Family Relocating",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Moving across the country was stressful, but Sunshine Realty made finding our perfect family home effortless. They understood our needs and found us a home in the ideal neighborhood for our children.",
    },
    {
      name: "David Thompson",
      role: "Commercial Buyer",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Their commercial real estate expertise is unmatched. They helped us find the perfect location for our business expansion and negotiated a fantastic deal. Highly recommend their services!",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-12 shadow-xl">
            <Quote className="h-12 w-12 text-orange-400 mb-6" />

            <div className="mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">"{testimonials[currentTestimonial].text}"</p>

              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="border-orange-400 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="border-orange-400 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-gradient-to-r from-orange-400 to-yellow-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
