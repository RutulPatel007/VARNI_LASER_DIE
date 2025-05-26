"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  FaUsers,
  FaCog,
  FaTools,
  FaCheckCircle,
  FaStar,
  FaHandshake,
  FaLightbulb,
  FaClock,
  FaChartLine,
  FaGem,
  FaShieldAlt,
  FaIndustry,
  FaAward,
  FaArrowRight,
} from "react-icons/fa"

const stats = [
  { number: "300,000+", label: "Dies Manufactured", icon: FaTools },
  { number: "18+", label: "Years Experience", icon: FaAward },
  { number: "1000+", label: "Happy Clients", icon: FaUsers },
  { number: "24x7", label: "Customer Support", icon: FaClock },
]

const capabilities = [
  { icon: FaUsers, title: "Experienced and talented team" },
  { icon: FaCog, title: "High-tech machine tools & equipments" },
  { icon: FaTools, title: "A wide range of services" },
  { icon: FaCheckCircle, title: "Comprehensive quality system" },
  { icon: FaStar, title: "Commitment to Excellence in Every Die" },
  { icon: FaHandshake, title: "Your Trusted Partner in Die Manufacturing" },
  { icon: FaLightbulb, title: "Innovation Driven by Expertise" },
  { icon: FaIndustry, title: "State-of-the-art facility" },
]

const whyChooseUs = [
  { icon: FaClock, title: "90% of products delivered within 24 HOURS" },
  { icon: FaChartLine, title: "Customer tracking system with real-time updates" },
  { icon: FaCog, title: "All production done with high-tech machines, ensuring TOP quality" },
  { icon: FaGem, title: "100% Imported and first-class materials used without compromise" },
  // { icon: FaCheckCircle, title: "Robust quality control achieving near 0% return and rework" },
  { icon: FaLightbulb, title: "Continuous innovation & R&D in packaging solutions" },
  { icon: FaShieldAlt, title: "Innovative packaging reducing damage in transit to 0%" },
]

const timeline = [
  {
    year: "2007",
    event: "Founded in Ahmedabad, Gujarat",
    description: "Started with a vision to provide precision die-cutting solutions",
  },
  {
    year: "2009",
    event: "Expanded manufacturing capacity",
    description: "Invested in advanced machinery and skilled workforce",
  },
  {
    year: "2010",
    event: "Introduced laser cutting technology",
    description: "Pioneered laser die technology in the region",
  },
  { year: "2013", event: "Achieved ISO 9001 certification", description: "Recognized for quality management systems" },
  {
    year: "2016",
    event: "Expanded to international markets",
    description: "Started serving clients across multiple countries",
  },
  { year: "2020", event: "Implemented ERP systems", description: "Automated processes for better customer experience" },
  { year: "2023", event: "Delivered 300,000th die", description: "Milestone achievement in our manufacturing journey" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="absolute inset-0">
          <Image
            src="/images/precision-tools.jpg"
            alt="About Varni Laser Die - Company History"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="max-w-4xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">About Varni Laser Die</h1>
            <p className="text-xl text-teal-100 leading-relaxed max-w-3xl">
              Your trusted partner in precision die-cutting solutions since 2007. We combine decades of expertise,
              cutting-edge innovation, and unwavering commitment to quality to deliver exceptional results that exceed
              expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="space-y-6">
                <div>
                  <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Our Story</span>
                  <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">Crafting Excellence Since 2007</h2>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Varni Laser Die is a premier service provider in India, based in Ahmedabad. Since our founding in
                  2007, we have specialized in a wide range of innovative and proven die-cutting processes, establishing
                  ourselves as industry leaders through consistent quality and innovation.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Over the years, we've built strong relationships with India's leading printers, packaging companies,
                  and manufacturers by consistently delivering high-quality, complex dies for diverse applications. Our
                  commitment to excellence has made us the preferred choice for businesses seeking reliable die-cutting
                  solutions.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  As a trusted and preferred partner, we are committed to professionalism, punctuality, and exceptional
                  customer support. Our extensive capabilities cover everything from design and die construction to
                  quality assurance and comprehensive after-service support.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Link href="/our-products" className="flex items-center">
                    Explore Our Products
                    <FaArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about-facility.jpg"
                alt="Our Skilled Team at Work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-3xl font-bold mb-2">18+ Years</div>
                <div className="text-lg opacity-90">of Manufacturing Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Our Capabilities</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced technology, skilled craftsmanship, and quality materials to deliver exceptional
              die-cutting solutions that exceed industry standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 text-center p-6 group border-2 border-gray-100 hover:border-teal-200 transform hover:scale-105">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 shadow-lg">
                      <capability.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors text-lg">
                      {capability.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Varni Laser Die?</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart as the industry leader in precision
              die-cutting solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/15 backdrop-blur-sm p-8 rounded-xl hover:bg-white/25 transition-all duration-300 group border border-white/20"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-white/30 transition-all duration-300">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{reason.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Our Journey</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Milestones of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - discover the key milestones that shaped our company and
              established us as a trusted name in precision die-cutting.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-cyan-500"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                    <Card className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group border-0">
                      <CardContent className="p-0">
                        <h3 className="text-3xl font-bold text-teal-600 mb-3 group-hover:text-teal-700 transition-colors">
                          {item.year}
                        </h3>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">{item.event}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Experience Excellence?</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Join thousands of satisfied customers who trust Varni Laser Die for their precision die-cutting needs.
              Experience the difference that quality, innovation, and exceptional service can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Link href="/contact" className="flex items-center">
                  Get Your Quote Today
                  <FaArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white font-semibold py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Link href="/our-products">Explore Our Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
