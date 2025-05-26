"use client"

import { motion } from "framer-motion"
import { FaCheckCircle, FaIndustry } from "react-icons/fa"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProductCarousel from "@/app/components/ProductCarousel"
import Image from "next/image"

const acidDyeImages = ["/images/foiling-process.png", "/images/cnc-machining.png", "/images/precision-die-cutting.png"]

const advantages = [
  "Excellent precision properties",
  "Bright and vibrant results",
  "Good performance and durability",
  "Wide range of applications available",
  "Suitable for various materials",
]

const applications = [
  "Foiling applications",
  "Metallic finishing",
  "Specialized coating",
  "Industrial processes",
  "Custom applications",
]

export default function AcidDyesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Matching About page style */}
      <section className="relative h-[500px] bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="absolute inset-0">
          <Image src="/images/foiling-process.png" alt="Foiling Process" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="max-w-4xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">Foiling Blocks</h1>
            <p className="text-xl text-teal-100 leading-relaxed max-w-3xl">
              Specialized foiling blocks for metallic and pigment foil applications. Our precision-engineered blocks
              provide vibrant finishes with excellent registration and durability for professional results.
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
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">Professional Foiling Solutions</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our foiling blocks are specially formulated for applying metallic and pigment foils to various
                substrates. They provide vibrant finishes with excellent registration properties and good durability,
                ensuring your materials maintain their beauty over time.
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
                <ProductCarousel images={acidDyeImages} />
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
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our foiling blocks incorporate precision engineering to deliver exceptional metallic and pigment finishes
              for professional applications.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Precision Application</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Foiling blocks create precise metallic finishes through controlled heat and pressure application,
                    creating a strong bond that results in excellent durability and visual appeal.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Controlled Process</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The foiling process can be precisely controlled by adjusting temperature, pressure, and timing,
                    allowing for excellent reproducibility and consistent results across production runs.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Versatile Range</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our foiling blocks are available for various foil types - metallic, pigment, and specialty foils -
                    each offering different visual effects and application properties to suit various end-use
                    requirements.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Quality Assurance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All our foiling blocks undergo rigorous testing to ensure consistent quality, proper heat transfer,
                    and registration properties, giving you confidence in your finishing results.
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
