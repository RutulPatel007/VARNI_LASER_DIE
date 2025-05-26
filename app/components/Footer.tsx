"use client"

import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const handlePhoneClick = () => {
    window.open("tel:+917940025678", "_self")
  }

  const handleEmailClick = () => {
    window.open("mailto:info@varnilaser.com", "_self")
  }

  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=Plot+No.+45,+GIDC+Industrial+Estate,+Vatva,+Ahmedabad", "_blank")
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">VLD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">VARNI LASER DIE</h3>
                {/* <p className="text-sm text-gray-400">|</p> */}
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading manufacturer of precision laser dies, embossing blocks, and converting tools. Serving the
              packaging and printing industry since 2007.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open("https://facebook.com/varnilaser", "_blank")}
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open("https://twitter.com/varnilaser", "_blank")}
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open("http://linkedin.com/in/parimal-matholiya-72079b260", "_blank")}
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={handleEmailClick}
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-products" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Quality
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <button
                onClick={handleLocationClick}
                className="flex items-start text-left hover:text-teal-400 transition-colors"
              >
                <MapPin className="w-5 h-5 text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>28, Shiv Estate,  B/h. Hotel Chatako,</p>
                  <p>Nr.  Baroda Expressway, NH No. - 8,</p>
                  <p>CTM, Ahmedabad-380026</p>
                  <p>Gujarat, India</p>
                </div>
              </button>
              <button onClick={handlePhoneClick} className="flex items-center hover:text-teal-400 transition-colors">
                <Phone className="w-5 h-5 text-teal-400 mr-2" />
                <div className="text-sm text-gray-300">
                  <p>+91 9664938784</p>
                </div>
              </button>
              <button onClick={handleEmailClick} className="flex items-center hover:text-teal-400 transition-colors">
                <Mail className="w-5 h-5 text-teal-400 mr-2" />
                <div className="text-sm text-gray-300">
                  <p>info@varnilaserdie.com</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Varni Laser Die | All rights reserved. | Designed with precision and care.
          </p>
        </div>
      </div>
    </footer>
  )
}
