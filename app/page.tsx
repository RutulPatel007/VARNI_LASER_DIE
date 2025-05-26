"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { FaUsers, FaClock, FaDesktop, FaTools, FaArrowRight, FaPlay } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"

const features = [
  {
    icon: FaUsers,
    subtitle: "Qualified Professionals",
    title: "PRECISE CONVERTING TOOLS",
    description:
      "We are a group of highly qualified professionals that can provide truly valuable diemaking services to our customers. Each team member leads in their area of specialization.",
  },
  {
    icon: FaClock,
    subtitle: "24 Hours Active Production Line",
    title: "LEAD TIME COMMITMENT",
    description:
      "We are given so many choices and decisions to make daily, so commitment and consistency make the difference. We deliver 90% of products within 24 hours.",
  },
  {
    icon: FaDesktop,
    subtitle: "We Are Here For You",
    title: "FRONT DESK WITH ERP INTEGRATION",
    description:
      "We have in house developed ERP software right from receiving customer orders to dispatching finished products with automated updates via email and messages.",
  },
]

const services = [
  "LASER DIES WITH RUBBERISING",
  "EMBOSSING AND DEBOSSING BLOCKS",
  "FOILING BLOCKS",
  "CNC BRASS & MAGNESIUM BLOCKS",
  "PERTINAX (PHENOLIC COUNTER)",
  "MALE FEMALE STRIPPING",
  "BRAILLE MALE PLATE AND FEMALE BLOCKS",
  "STICKER DIES",
  "BLISTER DIES",
  "CREASING MATRIX",
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] bg-gray-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-manufacturing.jpg"
            alt="Precision Laser Die Manufacturing Facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="max-w-3xl text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Precision Die Making
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Excellence
              </span>
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your trusted partner for high-quality laser dies, embossing blocks, and precision converting tools.
              Delivering excellence since 2007 with cutting-edge technology and unmatched expertise.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-teal-400"
              >
                <Link href="/our-products" className="flex items-center justify-center">
                  <FaPlay className="mr-2" />
                  View Products
                  <FaArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl backdrop-blur-sm bg-white/10"
              >
                <Link href="/contact" className="flex items-center justify-center">
                  Get Quote
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <motion.div
            className="bg-white/20 backdrop-blur-md rounded-lg p-4 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-2xl font-bold">18+</div>
            <div className="text-sm">Years Experience</div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Varni Laser Die?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced technology, skilled expertise, and unwavering commitment to deliver exceptional
              results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <Card className="h-full border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 shadow-lg">
                      <feature.icon className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-teal-600 text-sm font-semibold mb-3 uppercase tracking-wide">
                      {feature.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/WhatsApp Image 2025-05-26 at 23.12.31.jpeg"
                  alt="Modern Manufacturing Facility"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-3xl font-bold">300,000+</div>
                  <div className="text-sm opacity-90">Dies Manufactured</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="space-y-6">
                <div>
                  <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">About Us</span>
                  <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">Crafting Excellence Since 2007</h2>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Varni Laser Die is a premier service provider in India, based in Ahmedabad. Since our founding in
                  2007, we have specialized in a wide range of innovative and proven die-cutting processes.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Over the years, we've built strong relationships with India's leading printers, packaging companies,
                  and manufacturers by consistently delivering high-quality, complex dies for diverse applications.
                </p>

                <div className="grid grid-cols-2 gap-6 py-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600">1000+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600">24hrs</div>
                    <div className="text-sm text-gray-600">Delivery Time</div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Link href="/about" className="flex items-center">
                    Learn More About Us
                    <FaArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Comprehensive Die-Cutting Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of high-quality die-cutting solutions to meet the diverse needs of our clients
              across various industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 shadow-lg">
                      <FaTools className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors text-lg">
                      {service}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Link href="/our-products" className="flex items-center">
                View All Products & Services
                <FaArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Ideas into Reality?</h2>
            <p className="text-xl text-teal-100 mb-10 leading-relaxed">
              Contact us today to discuss your die-cutting requirements and discover how our expertise can elevate your
              manufacturing processes. Get your customized quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-white"
              >
                <Link href="/contact" className="flex items-center">
                  Get Your Quote Today
                  <FaArrowRight className="ml-2" />
                </Link>
              </Button>
              {/* <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-medium transition-all duration-300 shadow-xl backdrop-blur-sm bg-white/10"
              >
                <Link href="tel:+919876543210" className="flex items-center">
                  Call Now: +91 98765 43210
                </Link>
              </Button> */}

              <Button
                              asChild
                              size="lg"
                              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-medium transition-all duration-300 shadow-xl backdrop-blur-sm bg-white/10"
                              >
                              <a href="tel:+919664938784" className="flex items-center">
                                <FaPhone className="mr-2" />
                                Call Now: +91 9664938784
                              </a>
                            </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
