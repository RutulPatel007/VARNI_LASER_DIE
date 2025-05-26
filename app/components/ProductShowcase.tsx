"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const products = [
  { name: "Sodium Hydroxide", formula: "NaOH", description: "Versatile base for various industrial applications." },
  { name: "Hydrochloric Acid", formula: "HCl", description: "Strong acid used in metal cleaning and ore processing." },
  { name: "Ethanol", formula: "C2H5OH", description: "Widely used solvent and fuel additive." },
  {
    name: "Sulfuric Acid",
    formula: "H2SO4",
    description: "Essential in fertilizer production and mineral processing.",
  },
]

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <motion.div
            key={selectedProduct.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
            <p className="text-xl text-gray-600 mb-4">{selectedProduct.formula}</p>
            <p>{selectedProduct.description}</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <button
              key={product.name}
              onClick={() => setSelectedProduct(product)}
              className={`p-4 rounded-lg transition-colors ${
                selectedProduct.name === product.name ? "bg-green-500 text-white" : "bg-white hover:bg-green-100"
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
