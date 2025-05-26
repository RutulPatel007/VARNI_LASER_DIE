"use client"

import { motion } from "framer-motion"
import { FaCheckCircle, FaIndustry } from "react-icons/fa"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProductCarousel from "@/app/components/ProductCarousel"
import Image from "next/image"

const solventDyeImages = [
  "/images/cnc-machining.png",
  "/images/precision-die-cutting.png",
  "/images/laser-dies-detail.png",
]

const advantages = [
  "Excellent precision in manufacturing",
  "High performance and reliability",
  "Good durability and stability",
  "Wide range of applications available",
  "Suitable for various industrial materials",
]

const applications = [
  "CNC machining operations",
  "Precision manufacturing",
  "Industrial cutting applications",
  "Custom tooling solutions",
  "High-precision components",
]

export default function SolventDyesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Matching About page style */}
      <section className="relative h-[500px] bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="absolute inset-0">
          <Image src="/images/cnc-machining.png" alt="CNC Machining Process" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="max-w-4xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">CNC Blocks</h1>
            <p className="text-xl text-teal-100 leading-relaxed max-w-3xl">
              Computer-controlled precision blocks for complex cutting requirements. Our CNC blocks are designed for
              high-precision applications with exceptional accuracy and reliability in demanding industrial
              environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Matching About page style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Product Overview</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">Precision CNC Solutions</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our CNC blocks are designed for precision manufacturing applications requiring tight tolerances and
                complex geometries. They offer excellent performance in industrial environments and provide reliable,
                consistent results with high precision and durability.
              </p>

              <div className="grid gap-6">
                <Card className="border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <FaCheckCircle className="mr-3 text-teal-500" />
                      Key Advantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {advantages.map((advantage, index) => (
                        <li key={index} className="text-gray-600">
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <FaIndustry className="mr-3 text-teal-500" />
                      Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {applications.map((application, index) => (
                        <li key={index} className="text-gray-600">
                          {application}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ProductCarousel images={solventDyeImages} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Matching About page style */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Technical Features</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Key Features & Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our CNC blocks incorporate advanced technology and precision engineering to deliver exceptional
              performance across a wide range of manufacturing applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Precision Manufacturing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    CNC blocks are specifically designed for computer-controlled manufacturing processes, allowing for
                    easy integration into automated systems and precise material handling.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">High Performance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our CNC blocks offer excellent resistance to wear and maintain their precision over extended use,
                    making them suitable for high-volume production environments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Versatile Applications</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Many of our CNC blocks are designed for multiple applications and can be easily reconfigured,
                    ensuring optimal performance and cost-effectiveness for various manufacturing needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Customizable Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We offer custom CNC block solutions to meet specific requirements for precision, material
                    compatibility, and performance characteristics, tailored to your unique application needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
