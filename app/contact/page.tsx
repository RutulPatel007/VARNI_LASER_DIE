"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaWhatsapp,
  FaLinkedin,
  FaSpinner,
} from "react-icons/fa"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"

    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)
    setFormErrors({})

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", formData)
      setFormSubmitted(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false)
        setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" })
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: ["+91 9664938784", "+91 9426371130"],
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      action: () => window.open("tel:+919876543210", "_self"),
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["info@varnilaserdie.com", "sales@varnilaserdie.com"],
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      action: () => window.open("mailto:info@varnilaser.com", "_self"),
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      details: ["28, Shiv Estate,  B/h. Hotel Chatako, Nr.  Baroda Expressway, NH No. - 8, CTM, Ahmedabad-380026, Gujarat, India"],
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      action: () =>
        window.open("https://maps.google.com/?q=123+Industrial+Estate,+Ahmedabad,+Gujarat+380001,+India", "_blank"),
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: ["Monday - Sunday", " 9:00 AM - 7:00 PM"],
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      action: null,
    },
  ]

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your die-cutting services. Could you please provide more information?",
    )
    window.open(`https://wa.me/919664938784?text=${message}`, "_blank")
  }

  const handleLinkedIn = () => {
    window.open("http://linkedin.com/in/parimal-matholiya-72079b260", "_blank")
  }

  const handleGetDirections = () => {
    window.open("https://maps.app.goo.gl/FhAZrk3hWDbQUdweA?g_st=com.google.maps.preview.copy", "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Varni Laser Die"
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
            <h1 className="text-5xl font-bold mb-6">Get In Touch With Us</h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              Ready to discuss your die-cutting needs? Our team of experts is here to help you find the perfect solution
              for your manufacturing requirements. Contact us today for a personalized consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Card className="shadow-2xl border-0">
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-t-lg">
                    <CardTitle className="text-3xl text-gray-800 flex items-center">
                      <FaEnvelope className="mr-3 text-teal-600" />
                      Send us a Message
                    </CardTitle>
                    <p className="text-gray-600 text-lg">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent className="p-8">
                    {formSubmitted ? (
                      <motion.div
                        className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-10 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <FaCheck className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-green-800 mb-4">Message Sent Successfully!</h3>
                        <p className="text-green-700 text-lg">
                          Thank you for contacting us. Our team will review your message and get back to you shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                              Full Name *
                            </label>
                            <Input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full h-12 border-2 transition-all duration-200 ${
                                formErrors.name
                                  ? "border-red-300 focus:border-red-500"
                                  : "border-gray-200 focus:border-teal-500"
                              }`}
                              placeholder="Enter your full name"
                              disabled={isSubmitting}
                            />
                            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full h-12 border-2 transition-all duration-200 ${
                                formErrors.email
                                  ? "border-red-300 focus:border-red-500"
                                  : "border-gray-200 focus:border-teal-500"
                              }`}
                              placeholder="Enter your email address"
                              disabled={isSubmitting}
                            />
                            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <Input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full h-12 border-2 border-gray-200 focus:border-teal-500 transition-all duration-200"
                              placeholder="Enter your phone number"
                              disabled={isSubmitting}
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                              Company Name
                            </label>
                            <Input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full h-12 border-2 border-gray-200 focus:border-teal-500 transition-all duration-200"
                              placeholder="Enter your company name"
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                            Subject *
                          </label>
                          <Input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`w-full h-12 border-2 transition-all duration-200 ${
                              formErrors.subject
                                ? "border-red-300 focus:border-red-500"
                                : "border-gray-200 focus:border-teal-500"
                            }`}
                            placeholder="What is this regarding?"
                            disabled={isSubmitting}
                          />
                          {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                            Your Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full border-2 transition-all duration-200 resize-none ${
                              formErrors.message
                                ? "border-red-300 focus:border-red-500"
                                : "border-gray-200 focus:border-teal-500"
                            }`}
                            placeholder="Tell us about your requirements, project details, or any questions you have..."
                            disabled={isSubmitting}
                          />
                          {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <FaSpinner className="animate-spin mr-2" />
                              Sending Message...
                            </div>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <Card className="shadow-2xl border-0">
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
                    <CardTitle className="text-2xl text-gray-800">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        className={`flex items-start p-4 rounded-xl transition-all duration-300 ${
                          info.action ? "cursor-pointer hover:bg-teal-50 hover:shadow-md transform hover:scale-105" : ""
                        }`}
                        onClick={info.action || undefined}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className={`${info.color} p-4 rounded-xl mr-4 flex-shrink-0 shadow-lg`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2 text-lg">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-teal-50 to-cyan-50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-800">Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Button
                        onClick={handleWhatsApp}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <FaWhatsapp className="mr-2 text-lg" />
                        WhatsApp Us
                      </Button>
                      <Button
                        onClick={handleLinkedIn}
                        variant="outline"
                        className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white font-semibold py-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <FaLinkedin className="mr-2 text-lg" />
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Facility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Ahmedabad's industrial area, our state-of-the-art facility is equipped with
              cutting-edge machinery and technology to serve all your die-cutting needs.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="h-[500px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2139920982436!2d72.6773913!3d23.0159138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87bb26f1aacf%3A0x2a0217b9b3d8b8cd!2sTirupati%20Aakruti%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1748284033169!5m2!1sen!2sin"
                  width="100%"
                  
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Varni Laser Die Location"
                ></iframe>
              </div>

              {/* Get Directions Button */}
              <div className="absolute top-4 right-4">
                <Button
                  onClick={handleGetDirections}
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-6 py-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-teal-50 to-cyan-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Varni Laser Die Pvt. Ltd.</h3>
                  <p className="text-gray-600">28, Shiv Estate,  B/h. Hotel Chatako, Nr.  Baroda Expressway, NH No. - 8, CTM, Ahmedabad-380026, Gujarat, India</p>
                </div>
                <Button
                  onClick={handleGetDirections}
                  variant="outline"
                  className="border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white font-semibold transition-all duration-300"
                >
                  View Larger Map
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-teal-100 mb-10 leading-relaxed">
              Our team is standing by to help you with your die-cutting requirements. Whether you need a quick quote or
              detailed consultation, we're here to provide the expertise and solutions you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-4 px-8 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <a href="tel:+919664938784" className="flex items-center">
                  <FaPhone className="mr-2" />
                  Call Now: +91 9664938784
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold py-4 px-8 transition-all duration-300 shadow-xl backdrop-blur-sm bg-white/10"
              >
                <a href="mailto:info@varnilaserdie.com" className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
