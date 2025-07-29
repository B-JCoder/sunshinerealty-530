"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-400 to-yellow-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Stay Updated with Market Trends</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest property listings, market insights, and exclusive deals delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
            />
            <Button className="bg-white text-orange-500 hover:bg-gray-100">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image src="/images/logo.jpg" alt="Sunshine Realty" width={50} height={50} className="rounded-full" />
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Sunshine Realty
                  </h3>
                  <p className="text-gray-400 text-sm">Your Dream Home Awaits</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                With over 15 years of experience in California real estate, we're committed to helping you find your
                perfect property.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-orange-400 bg-transparent"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-orange-400 bg-transparent"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-orange-400 bg-transparent"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-orange-400 bg-transparent"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  "Buy Properties",
                  "Rent Properties",
                  "Commercial",
                  "New Projects",
                  "Property Valuation",
                  "Market Reports",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  "Property Management",
                  "Investment Consulting",
                  "Home Loans",
                  "Legal Services",
                  "Property Insurance",
                  "Interior Design",
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">
                      123 Main Street
                      <br />
                      Sacramento, CA 95814
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-400" />
                  <p className="text-gray-400">(530) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-400" />
                  <p className="text-gray-400">info@sunshinerealty530.com</p>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold mb-3">Office Hours</h5>
                <div className="text-gray-400 text-sm space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Sunshine Realty. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
