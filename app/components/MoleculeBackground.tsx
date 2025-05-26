"use client"

import { motion } from "framer-motion"
import { FaAtom } from "react-icons/fa"

const atoms = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 20 + 10,
}))

export default function MoleculeBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {atoms.map((atom) => (
        <motion.div
          key={atom.id}
          className="absolute text-blue-200 opacity-20"
          style={{
            left: `${atom.x}%`,
            top: `${atom.y}%`,
            fontSize: atom.size,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <FaAtom />
        </motion.div>
      ))}
    </div>
  )
}
