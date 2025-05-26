"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  FaUsers,
  FaDesktop,
  FaPencilRuler,
  FaCheckDouble,
  FaCogs,
  FaAward,
  FaShieldAlt,
  FaCertificate,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa"

const qualityFeatures = [
  {
    icon: FaUsers,
    title: "Skilled Experts | Advanced Converting Tools",
    description:
      "Our team of skilled professionals is dedicated to offering exceptional diemaking services. We take pride in our expertise, with each team member leading in their area of specialization.",
  },
  {
    icon: FaDesktop,
    title: "Here for You | Front Desk with ERP Integration",
    description:
      "Our custom-built ERP software seamlessly manages the entire process—from receiving customer orders to dispatching finished products. With automated updates sent via email and messages, we ensure a hassle-free tracking experience.",
  },
  {
    icon: FaPencilRuler,
    title: "Advanced Design Platform for Superior Die Manufacturing",
    description:
      "We use top-tier design software, including Impact from Arden Software UK and PackDesign from BCSI Netherlands, to create precise keylines for all your needs. Our CAD systems are fully integrated with CNC machines, ensuring zero tolerance for a flawless outcome every time.",
  },
  {
    icon: FaCheckDouble,
    title: "Who We Are | Quality is the Pride of Workmanship, Since 2007",
    description:
      "Since 2007, we have been dedicated to crafting superior box punching laser dies, offering unmatched quality and precision. We take great pride in being a trusted leader in box punching laser die manufacturing.",
  },
  {
    icon: FaCogs,
    title: "Our Services | One-Stop Die Shop",
    description:
      "Our die shop is fully equipped with state-of-the-art machinery to meet all your converting needs. We specialize in producing laser steel rule dies, clean room die-cutting tools, and rubberized dies.",
  },
]

const qualityStandards = [
  // {
  //   icon: FaAward,
  //   title: "ISO 9001 Certified",
  //   description:
  //     "Internationally recognized quality management system ensuring consistent excellence in all our processes.",
  // },
  {
    icon: FaShieldAlt,
    title: "Zero Defect Policy",
    description:
      "Our rigorous quality control measures ensure near-zero defects with comprehensive testing at every stage.",
  },
  {
    icon: FaCertificate,
    title: "Industry Standards",
    description: "All our products meet or exceed international industry standards for precision and durability.",
  },
]

const qualityProcess = [
  {
    step: "01",
    title: "Material Inspection",
    description: "Every raw material undergoes thorough inspection before entering our production process.",
  },
  {
    step: "02",
    title: "Precision Manufacturing",
    description: "State-of-the-art machinery ensures precise cutting and forming with tight tolerances.",
  },
  {
    step: "03",
    title: "Quality Testing",
    description: "Comprehensive testing protocols verify performance and durability standards.",
  },
  {
    step: "04",
    title: "Final Inspection",
    description: "Each product undergoes final quality checks before packaging and dispatch.",
  },
]

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="absolute inset-0">
          <Image
            src="/images/ChatGPT Image May 26, 2025, 11_59_43 PM.png"
            alt="Quality Control and Inspection"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">Our Commitment to Quality</h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              Excellence in every die, precision in every cut. Quality is not just our standard—it's our promise. We
              maintain the highest levels of quality control to ensure your complete satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Quality Standards</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Certified Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is backed by internationally recognized standards and rigorous internal
              processes that ensure consistent excellence in every product we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <Card className="h-full border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 shadow-lg">
                      <standard.icon className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">
                      {standard.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{standard.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Quality Excellence</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Our Quality Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to quality ensures every product meets the highest standards of precision and
              reliability, backed by cutting-edge technology and expert craftsmanship.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-2 border-gray-100 hover:border-teal-200">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300 shadow-lg">
                        <feature.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-lg group-hover:text-teal-600 transition-colors leading-tight">
                        {feature.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Quality Process</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">4-Step Quality Assurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every product goes through our rigorous 4-step quality assurance process to ensure exceptional results and
              complete customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <Card className="h-full border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-300 shadow-lg">
                      <span className="text-white font-bold text-lg">{process.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
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
              <h2 className="text-4xl font-bold mb-6">Our Quality Promise</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-1" />
                  <p className="text-teal-100 leading-relaxed">
                    Zero-defect manufacturing with comprehensive quality control at every stage
                  </p>
                </div>
                {/* <div className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-1" />
                  <p className="text-teal-100 leading-relaxed">
                    ISO 9001 certified processes ensuring international quality standards
                  </p>
                </div> */}
                <div className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-1" />
                  <p className="text-teal-100 leading-relaxed">
                    Continuous improvement through advanced technology and skilled expertise
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-1" />
                  <p className="text-teal-100 leading-relaxed">
                    Customer satisfaction guaranteed with comprehensive after-service support
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-4 px-8 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Link href="/contact" className="flex items-center">
                  Discuss Your Quality Requirements
                  <FaArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/WhatsApp Image 2025-05-26 at 23.12.49-2.jpeg"
                alt="Precision Quality Control Process"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-lg opacity-90">Quality Success Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Experience Quality Excellence</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Ready to experience the difference that uncompromising quality makes? Contact us to learn more about our
              quality standards and discover how we can exceed your expectations with precision die-cutting solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Link href="/contact" className="flex items-center">
                  Get Your Quality Quote
                  <FaArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white font-semibold py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Link href="/our-products">View Our Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
