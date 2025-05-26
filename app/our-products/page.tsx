"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaTools, FaCog, FaArrowRight, FaCheckCircle, FaStar, FaAward } from "react-icons/fa"

const productCategories = [
  {
    title: "Laser Dies",
    description: "High-precision laser dies with or without rubbering for various cutting applications",
    image: "/images/WhatsApp Image 2025-05-26 at 23.12.31.jpeg",
    features: ["Precision cutting", "Durable materials", "Custom designs", "Quick turnaround"],
    link: "/our-products/laser-dies",
  },
  {
    title: "Embossing & Debossing",
    description: "Premium embossing and debossing blocks for creating stunning visual effects",
    image: "/images/WhatsApp Image 2025-05-26 at 23.12.29.jpeg",
    features: ["Fine detail work", "Magnesium etching", "UK technology", "Consistent quality"],
    link: "/our-products/embossing-blocks",
  },
  {
    title: "Foiling Blocks",
    description: "Specialized foiling blocks for metallic and pigment foil applications",
    image: "/images/WhatsApp Image 2025-05-26 at 23.12.29-2.jpeg",
    features: ["Magnesium & Brass", "Precise registration", "Long lasting", "Various sizes"],
    link: "/our-products/foiling-blocks",
  },
  {
    title: "Tag Dies",
    description: "Computer-controlled precision blocks for complex cutting requirements",
    image: "/images/WhatsApp Image 2025-05-26 at 23.12.50.jpeg",
    features: ["CNC precision", "Brass & Magnesium", "Complex geometries", "Tight tolerances"],
    link: "/our-products/cnc-blocks",
  },
  {
    title: "Stripping Dies",
    description: "Male and female stripping dies for efficient waste removal",
    image: "/images/WhatsApp Image 2025-05-26 at 23.12.30-3.jpeg",
    features: ["Dynamic stripping", "Conventional options", "Automated compatible", "Time saving"],
    link: "/our-products/stripping-dies",
  },
  {
    title: "Specialty Dies",
    description: "Braille, sticker, blister and other specialized cutting solutions",
    image: "/images/WhatsApp Image 2025-05-26 at 23.12.30-2.jpeg",
    features: ["Braille standards", "Blister packaging", "Sticker cutting", "Custom solutions"],
    link: "/our-products/specialty-dies",
  },
]

const stats = [
  { number: "300,000+", label: "Dies Manufactured", icon: FaTools },
  { number: "18+", label: "Years Experience", icon: FaAward },
  { number: "1000+", label: "Happy Clients", icon: FaStar },
  { number: "24hrs", label: "Delivery Time", icon: FaCog },
]

export default function OurProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Matching About page style */}
      <section className="relative h-[500px] bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="absolute inset-0">
          <Image
            src="/images/products-showcase.png"
            alt="Our Products Showcase"
            fill
            className="object-cover opacity-20"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/30"></div> */}
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">Our Products & Services</h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              Comprehensive range of precision die-cutting solutions designed to meet the highest standards of quality
              and performance for all your manufacturing needs. From concept to completion, we deliver excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Matching About page style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Our Achievements</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Excellence in Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and precision has earned us the trust of thousands of clients worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <Card className="h-full border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 shadow-lg">
                      <stat.icon className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-4xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Matching About page style */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Our Expertise</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">Precision Manufacturing Excellence</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 18 years of experience in precision die manufacturing, we have established ourselves as a
                trusted partner for businesses seeking high-quality cutting solutions. Our state-of-the-art facility and
                expert team ensure that every product meets the highest standards of precision and durability.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">ISO 9001:2015 certified quality management</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Advanced CNC and laser cutting technology</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">24-hour delivery for standard products</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Custom solutions for unique requirements</span>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 px-8 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Link href="/about" className="flex items-center">
                  Learn More About Us
                  <FaArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/modern-facility.png"
                  alt="State-of-the-art Manufacturing Facility"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-3xl font-bold mb-2">ISO 9001</div>
                  <div className="text-lg opacity-90">Certified Quality</div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid - Matching About page style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Product Categories</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Complete Die-Cutting Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of die-cutting solutions designed to meet the highest standards of
              precision and quality across various industries and applications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {productCategories.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden group border-0 shadow-lg">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-white text-sm font-semibold">Premium Quality</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-between bg-white">
                      <div>
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-2xl text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                            {product.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                          <ul className="space-y-3 mb-8">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <FaCheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                                <span className="font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </div>
                      {/* <Button
                        asChild
                        className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 w-full font-semibold py-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Link href={product.link} className="flex items-center justify-center">
                          Learn More
                          <FaArrowRight className="ml-2" />
                        </Link>
                      </Button> */}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Matching About page style */}
      <section className="py-20 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <span className="text-teal-100 font-semibold text-sm uppercase tracking-wide">Our Process</span>
              <h2 className="text-4xl font-bold mb-6">Manufacturing Excellence</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Design & Engineering</h3>
                    <p className="text-teal-100">Advanced CAD systems and precision engineering for optimal results</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Precision Manufacturing</h3>
                    <p className="text-teal-100">State-of-the-art machinery ensuring tight tolerances and quality</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                    <p className="text-teal-100">Rigorous testing and inspection at every stage of production</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Delivery & Support</h3>
                    <p className="text-teal-100">Fast delivery with comprehensive after-service support</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about-facility.jpg"
                alt="Precision Manufacturing Process"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-3xl font-bold mb-2">24hrs</div>
                <div className="text-lg opacity-90">Average Delivery</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching About page style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 rounded-3xl p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Our team of experts can design and manufacture custom dies to meet your specific requirements. From
                concept to completion, we provide end-to-end solutions tailored to your unique needs with precision and
                excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-4 px-8 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <Link href="/contact" className="flex items-center">
                    Get Custom Quote
                    <FaArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold py-4 px-8 transition-all duration-300 shadow-xl backdrop-blur-sm bg-white/10"
                >
                  <Link href="/about">Learn About Our Process</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
