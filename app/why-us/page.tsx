"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaClock, FaChartLine, FaCog, FaGem, FaCheckCircle, FaLightbulb, FaShieldAlt } from "react-icons/fa"

const reasons = [
  { icon: FaClock, title: "90% of products delivered within 24 HOURS" },
  { icon: FaChartLine, title: "Customers tracking system" },
  { icon: FaCog, title: "All production done with high-tech machines, ensuring the TOP most quality" },
  { icon: FaGem, title: "100% Imported and all first class materials used in production without compromise" },
  {
    icon: FaCheckCircle,
    title: "Robust quality control and assurance helps us achieving nearing 0 % of return and rework",
  },
  { icon: FaLightbulb, title: "We meet your needs in the packaging sector by bringing in continuous innovation & R&D" },
  { icon: FaShieldAlt, title: "Innovative packaging which reduces the damage in transition to 0%" },
]

export default function WhyUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Trust Us?
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <reason.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
