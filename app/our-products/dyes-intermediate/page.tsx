"use client"

import { motion } from "framer-motion"
import { FaCheckCircle, FaIndustry } from "react-icons/fa"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProductCarousel from "@/app/components/ProductCarousel"
import Image from "next/image"

const dyesIntermediateImages = [
  "/images/stripping-dies.png",
  "/images/laser-dies-detail.png",
  "/images/embossing-workshop.png",
]

const advantages = [
  "High precision and consistent quality",
  "Wide range of applications available",
  "Custom manufacturing capabilities",
  "Compliance with international standards",
  "Technical support for integration",
]

const applications = [
  "Precision die cutting",
  "Stripping operations",
  "Waste removal systems",
  "Automated production lines",
  "Custom cutting solutions",
]

export default function DyesIntermediatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Matching About page style */}
      <section className="relative h-[500px] bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="absolute inset-0">
          <Image
            src="/images/stripping-dies.png"
            alt="Stripping Dies Manufacturing"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="max-w-4xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">Stripping Dies</h1>
            <p className="text-xl text-teal-100 leading-relaxed max-w-3xl">
              Male and female stripping dies for efficient waste removal. Our precision-engineered stripping solutions
              ensure clean separation and optimal production efficiency in demanding manufacturing environments.
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
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">Professional Stripping Solutions</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We offer a wide range of high-quality stripping dies, which are crucial components in efficient waste
                removal systems. Our stripping solutions ensure consistent quality and performance in production
                processes, providing the precision needed for clean material separation.
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
                <ProductCarousel images={dyesIntermediateImages} />
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
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Our Commitment</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Excellence in Manufacturing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and precision ensures that every stripping die meets the highest standards of
              performance and reliability.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Quality Assurance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    At Varni Laser Die, we maintain rigorous quality control processes to ensure that our stripping dies
                    meet the highest standards of precision and performance, providing consistent results in your
                    production processes.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Research & Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our dedicated R&D team continuously works on developing new stripping solutions and improving
                    existing ones to meet the evolving needs of the manufacturing industry and address emerging
                    challenges in waste removal efficiency.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Custom Manufacturing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We offer custom stripping die manufacturing services to meet specific requirements of our clients,
                    providing tailored solutions for unique production processes and specialized waste removal
                    applications.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Technical Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team of experts provides comprehensive technical support to help you integrate our stripping
                    dies into your production processes effectively and optimize your waste removal systems for maximum
                    efficiency.
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
