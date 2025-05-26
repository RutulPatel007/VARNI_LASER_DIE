"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/our-products" },
  { name: "Quality", href: "/quality" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">VLD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800">VARNI</span>
              <span className="text-sm text-gray-600 -mt-1">LASER DIE</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-gray-700 font-medium relative py-2 px-3 rounded-md transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-teal-600 bg-teal-50 shadow-sm"
                        : "hover:text-teal-600 hover:bg-teal-50"
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 rounded-full"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get Quote Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-2 font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Link href="/contact">GET A QUOTE</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-gray-700 hover:text-teal-500 hover:bg-teal-50 rounded-md transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="py-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 mx-2 rounded-md text-gray-700 font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? "text-teal-600 bg-teal-50 shadow-sm"
                          : "hover:text-teal-600 hover:bg-teal-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="px-4 pt-2">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white w-full shadow-lg"
                  >
                    <Link href="/contact">GET A QUOTE</Link>
                  </Button>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
