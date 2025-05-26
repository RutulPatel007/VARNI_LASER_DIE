"use client"

import { motion } from "framer-motion"
import { FaCheckCircle, FaIndustry } from "react-icons/fa"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProductCarousel from "@/app/components/ProductCarousel"
import Image from "next/image"

const reactiveDyeImages = [
  "/images/laser-dies-detail.png",
  "/images/precision-die-cutting.png",
  "/images/cnc-machining.png",
]

const advantages = [
  "Excellent cutting precision",
  "Bright and clean results",
  "High performance rates",
  "Good durability and reliability",
  "Environmentally friendly options available",
]

const applications = [
  "Packaging and printing industry",
  "Automotive components",
  "Electronics manufacturing",
  "Medical device production",
  "Custom industrial applications",
]

const reactiveColdDyes = [
  {
    name: "Laser Die LD-001",
    code: "LD-001",
    specifications: "High precision cutting",
  },
  {
    name: "Laser Die LD-002",
    code: "LD-002",
    specifications: "Medium precision cutting",
  },
  {
    name: "Laser Die LD-003",
    code: "LD-003",
    specifications: "Standard cutting applications",
  },
  {
    name: "Laser Die LD-004",
    code: "LD-004",
    specifications: "Heavy duty applications",
  },
  {
    name: "Laser Die LD-005",
    code: "LD-005",
    specifications: "Specialized cutting needs",
  },
]

export default function ReactiveDyesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="absolute inset-0">
          <Image
            src="/images/laser-dies-detail.png"
            alt="Laser Dies Manufacturing"
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
            <h1 className="text-6xl font-bold mb-6 leading-tight">Laser Dies</h1>
            <p className="text-xl text-teal-100 leading-relaxed max-w-3xl">
              High-precision laser dies with exceptional cutting accuracy and durability. Our laser dies are engineered
              for superior performance and long-lasting reliability in demanding industrial applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Product Overview</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">Precision Laser Dies</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our laser dies are known for their excellent precision and bright cutting performance. They form
                superior cuts with the material, resulting in exceptional durability and clean edges that last. Each die
                is manufactured to the highest standards using advanced laser technology.
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
                <ProductCarousel images={reactiveDyeImages} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Our laser dies incorporate advanced technology and precision engineering to deliver exceptional
              performance across a wide range of applications.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Superior Precision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Laser dies provide exceptional cutting precision with tight tolerances, creating clean cuts that
                    won't fray or damage easily. This precision cutting is what gives laser dies their exceptional
                    performance.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Versatile Application</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our laser dies can be applied using various methods including rotary cutting, flatbed cutting, and
                    specialized applications. They are suitable for both industrial-scale operations and custom
                    projects.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Brilliant Performance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Known for their sharp and precise cuts, laser dies offer an extensive range of applications that can
                    achieve almost any desired shape with excellent reproducibility.
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
                  <h3 className="text-xl font-semibold mb-3 text-teal-600">Eco-Friendly Options</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We offer environmentally conscious laser dies that reduce waste and energy consumption, making them
                    a more sustainable choice for modern manufacturing processes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Product Specifications</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Laser Die Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed specifications for our range of precision laser dies, designed to meet various industrial
              requirements and applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-teal-50 to-cyan-50">
                  <TableHead className="font-semibold text-gray-800 text-lg">Die Name</TableHead>
                  <TableHead className="font-semibold text-gray-800 text-lg">Product Code</TableHead>
                  <TableHead className="font-semibold text-gray-800 text-lg">Specifications</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reactiveColdDyes.map((dye, index) => (
                  <motion.tr
                    key={dye.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="hover:bg-teal-50 transition-colors duration-200"
                  >
                    <TableCell className="font-medium text-gray-800">{dye.name}</TableCell>
                    <TableCell className="text-gray-600">{dye.code}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                        {dye.specifications}
                      </span>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
