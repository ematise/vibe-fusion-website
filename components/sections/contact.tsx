"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Instagram, Clock, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    location: "cluj"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      location: "cluj"
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[200px] mb-6">
        <Image
          src="/restaurant/vibe-restaurant-table.jpg"
          alt="Contact Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="!text-2xl !md:text-4xl font-semibold text-white text-center drop-shadow-lg">
            {t("contactPage.heroTitle")}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-brand-dark mb-6">
                  {t("contactPage.locationsTitle")}
                </h2>
              </motion.div>

              {/* Cluj Location */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 space-y-4"
              >
                <h3 className="text-2xl font-semibold text-brand-primary">Cluj-Napoca</h3>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Strada Zorilor 25</p>
                    <p className="text-gray-600">Cluj-Napoca 400535, România</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  <Link 
                    href="tel:0723072720"
                    className="text-gray-800 hover:text-brand-primary transition-colors"
                  >
                    0723 072 720
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  <Link 
                    href="mailto:cluj@vibefusion.com"
                    className="text-gray-800 hover:text-brand-primary transition-colors"
                  >
                    cluj@vibefusion.com
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  <Link 
                    href="https://www.instagram.com/vibefusion.cluj/" 
                    target="_blank"
                    className="text-gray-800 hover:text-brand-primary transition-colors"
                  >
                    @vibefusion.cluj
                  </Link>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">{t("contactPage.openingHours")}</p>
                    <p className="text-gray-600">{t("footer.mondayToSunday")}: 10:00 - 22:00</p>
                  </div>
                </div>
              </motion.div>

              {/* Brasov Location */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-6 space-y-4"
              >
                <h3 className="text-2xl font-semibold text-brand-primary">Brașov</h3>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Strada Valentin Wagner 4</p>
                    <p className="text-gray-600">Brașov 500031, România</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  <Link 
                    href="tel:0736924117"
                    className="text-gray-800 hover:text-brand-primary transition-colors"
                  >
                    0736 924 117
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  <Link 
                    href="mailto:brasov@vibefusion.com"
                    className="text-gray-800 hover:text-brand-primary transition-colors"
                  >
                    brasov@vibefusion.com
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  <Link 
                    href="https://www.instagram.com/vibefusion__/" 
                    target="_blank"
                    className="text-gray-800 hover:text-brand-primary transition-colors"
                  >
                    @vibefusion__
                  </Link>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">{t("contactPage.openingHours")}</p>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>{t("footer.monday")}: 11:00 - 22:00</p>
                      <p>{t("footer.friday")}: 11:00 - 22:30</p>
                      <p>{t("footer.saturday")}: 12:00 - 22:30</p>
                      <p>{t("footer.sunday")}: 12:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-brand-dark mb-6">
                  {t("contactPage.formTitle")}
                </h2>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-2xl p-6 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contactPage.nameLabel")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                      placeholder={t("contactPage.namePlaceholder")}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contactPage.emailLabel")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                      placeholder={t("contactPage.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contactPage.phoneLabel")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                      placeholder={t("contactPage.phonePlaceholder")}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contactPage.locationLabel")}
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                    >
                      <option value="cluj">Cluj-Napoca</option>
                      <option value="brasov">Brașov</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contactPage.messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors resize-none"
                    placeholder={t("contactPage.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{t("contactPage.submitButton")}</span>
                </button>
              </motion.form>
            </div>
          </div>
      </div>
    </div>
  )
}
