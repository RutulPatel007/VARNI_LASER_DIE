"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration: number
}

export default function AnimatedCounter({ end, duration }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let startTime: number
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 1000)
        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end))
          requestAnimationFrame(animateCount)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animateCount)
      controls.start({ opacity: 1, y: 0 })
    }
  }, [inView, end, duration, controls])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ duration: 0.5 }}>
      {count}
    </motion.div>
  )
}
