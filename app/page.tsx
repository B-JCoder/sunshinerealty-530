"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PropertyCategories from "@/components/property-categories"
import FeaturedListings from "@/components/featured-listings"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import OurAgents from "@/components/our-agents"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <div className="max-w-7xl mx-auto px-6">
          <PropertyCategories />
          <FeaturedListings />
          <WhyChooseUs />
          <Testimonials />
          <OurAgents />
        </div>
      </main>
      <Footer />
    </div>
  )
}
