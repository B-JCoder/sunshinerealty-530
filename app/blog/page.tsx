"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search, TrendingUp, Home, DollarSign, Users } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "California Real Estate Market Trends for 2024",
    excerpt:
      "Discover the latest trends shaping California's real estate market and what they mean for buyers and sellers in the coming year.",
    image: "/images/hero-bg.jpg",
    author: "Jennifer Martinez",
    date: "January 15, 2024",
    category: "Market Analysis",
    readTime: "5 min read",
  }

  const blogPosts = [
    {
      id: 2,
      title: "First-Time Homebuyer's Guide to Sacramento",
      excerpt:
        "Everything you need to know about buying your first home in Sacramento, from financing to neighborhoods.",
      image: "/images/house1.jpg",
      author: "Amanda Foster",
      date: "January 12, 2024",
      category: "Buying Tips",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Top 10 Home Staging Tips That Sell",
      excerpt: "Professional staging tips that can help your home sell faster and for a better price.",
      image: "/images/house3.jpg",
      author: "Sarah Johnson",
      date: "January 10, 2024",
      category: "Selling Tips",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Investment Properties: What to Look For",
      excerpt: "Key factors to consider when evaluating potential investment properties in California.",
      image: "/images/house4.jpg",
      author: "Carlos Rodriguez",
      date: "January 8, 2024",
      category: "Investment",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Understanding Mortgage Rates in 2024",
      excerpt: "A comprehensive guide to current mortgage rates and how they affect your home buying power.",
      image: "/images/house5.jpg",
      author: "Robert Kim",
      date: "January 5, 2024",
      category: "Finance",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Luxury Home Features That Add Value",
      excerpt: "Discover which luxury features provide the best return on investment for high-end properties.",
      image: "/images/house6.jpg",
      author: "Jennifer Martinez",
      date: "January 3, 2024",
      category: "Luxury Homes",
      readTime: "4 min read",
    },
    {
      id: 7,
      title: "Neighborhood Spotlight: Roseville",
      excerpt: "An in-depth look at Roseville's housing market, schools, amenities, and lifestyle.",
      image: "/images/house7.jpg",
      author: "Michael Chen",
      date: "December 30, 2023",
      category: "Neighborhoods",
      readTime: "8 min read",
    },
  ]

  const categories = [
    { name: "Market Analysis", count: 12, icon: TrendingUp },
    { name: "Buying Tips", count: 18, icon: Home },
    { name: "Selling Tips", count: 15, icon: DollarSign },
    { name: "Investment", count: 9, icon: Users },
    { name: "Neighborhoods", count: 14, icon: Home },
    { name: "Finance", count: 11, icon: DollarSign },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white mb-6">Real Estate Blog</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Estate{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay informed with the latest real estate trends, market analysis, and expert tips from our experienced
              team of professionals.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search articles..."
                className="pl-12 pr-4 py-3 border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-400 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white">Featured</Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white w-fit">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={index}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                      >
                        <div className="flex items-center">
                          <Icon className="h-4 w-4 text-orange-500 mr-3" />
                          <span className="text-gray-700 group-hover:text-orange-500">{category.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    )
                  })}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Stay Updated</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest real estate insights delivered to your inbox.
                  </p>
                  <Input placeholder="Your email" className="mb-3" />
                  <Button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Button
                        variant="outline"
                        className="border-orange-400 text-orange-500 hover:bg-orange-50 bg-transparent"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
