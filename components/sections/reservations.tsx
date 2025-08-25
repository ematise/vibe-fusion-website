"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar, Clock, Users, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageHeading } from "@/components/ui/page-heading"
import { useTranslation } from "@/lib/i18n"
import { H3, H4 } from "@/components/ui/headings"

export function Reservations() {
  const { t } = useTranslation()
  const [selectedLocation, setSelectedLocation] = useState<'cluj' | 'brasov'>('cluj')

  const locations = {
    cluj: {
      name: 'Cluj-Napoca',
      address: 'Strada Zorilor 25, Cluj-Napoca 400535',
      phone: '0723 072 720',
      email: 'cluj@vibefusion.ro',
      hours: 'Monday - Sunday: 10:00 - 22:00',
      reservationUrl: 'https://ialoc.ro/restaurante-cluj/vibe-fusion-restaurant-sushi-cluj-rezervari-4167'
    },
    brasov: {
      name: 'Brașov',
      address: 'Strada Valentin Wagner 4, Brașov 500031',
      phone: '0736 924 117',
      email: 'brasov@vibefusion.ro',
      hours: 'Monday: 11:00 - 22:00, Friday: 11:00 - 22:30, Saturday: 12:00 - 22:30, Sunday: 12:00 - 22:00',
      reservationUrl: 'https://ialoc.ro/restaurante-brasov/vibe-restaurant-sushi-brasov-cocktail-bar-rezervari-4402'
    }
  }

  const currentLocation = locations[selectedLocation]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[200px] mb-6">
        <Image
          src="/restaurant/vibe-restaurant-mirror.jpg"
          alt="Reservations Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col text-center items-center justify-center">
          <PageHeading level="h1" className="text-white text-center drop-shadow-lg">
            {t("reservationsPage.heroTitle")}
          </PageHeading>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
            {t("reservationsPage.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pt-0">
        <div className="max-w-4xl mx-auto">


          {/* Location Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <H3 size="sm" weight="semibold" align="center" className="mb-4">
              {t("reservationsPage.selectLocation")}
            </H3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSelectedLocation('cluj')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedLocation === 'cluj'
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cluj-Napoca
              </button>
              <button
                onClick={() => setSelectedLocation('brasov')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedLocation === 'brasov'
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Brașov
              </button>
            </div>
          </motion.div>

          {/* Selected Location Info */}
          <motion.div
            key={selectedLocation}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Location Details */}
              <div className="space-y-6">
                <H3 size="md" weight="semibold" variant="primary">
                  Vibe Fusion {currentLocation.name}
                </H3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">{t("reservationsPage.address")}</p>
                      <p className="text-gray-600">{currentLocation.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-brand-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">{t("reservationsPage.openingHours")}</p>
                      <p className="text-gray-600 text-sm">{currentLocation.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-brand-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">{t("reservationsPage.capacity")}</p>
                      <p className="text-gray-600 text-sm">{t("reservationsPage.capacityDescription")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reservation CTA */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="text-center">
                  <Calendar className="h-16 w-16 text-brand-primary mx-auto mb-4" />
                  <H4 size="md" weight="semibold" className="mb-2">
                    {t("reservationsPage.readyToBook")}
                  </H4>
                  <p className="text-gray-600 mb-6">
                    {t("reservationsPage.bookingDescription")}
                  </p>
                  
                  <Link
                    href={currentLocation.reservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-brand-primary text-white px-8 py-4 rounded-lg hover:bg-brand-primary/90 transition-colors font-medium text-lg"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>{t("reservationsPage.bookNowButton")}</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <Clock className="h-12 w-12 text-brand-primary mx-auto mb-4" />
              <H4 weight="semibold" className="mb-2">
                {t("reservationsPage.advanceBooking")}
              </H4>
              <p className="text-gray-600 text-sm">
                {t("reservationsPage.advanceBookingDescription")}
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <Users className="h-12 w-12 text-brand-primary mx-auto mb-4" />
              <H4 weight="semibold" className="mb-2">
                {t("reservationsPage.groupBookings")}
              </H4>
              <p className="text-gray-600 text-sm">
                {t("reservationsPage.groupBookingsDescription")}
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <Calendar className="h-12 w-12 text-brand-primary mx-auto mb-4" />
              <H4 weight="semibold" className="mb-2">
                {t("reservationsPage.specialEvents")}
              </H4>
              <p className="text-gray-600 text-sm">
                {t("reservationsPage.specialEventsDescription")}
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <H3 size="sm" weight="semibold" className="mb-4">
              {t("reservationsPage.needHelp")}
            </H3>
            <p className="text-gray-600 mb-4">
              {t("reservationsPage.contactDescription")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`tel:${currentLocation.phone}`}
                className="inline-flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span>{currentLocation.phone}</span>
              </Link>
              <Link
                href={`mailto:${currentLocation.email}`}
                className="inline-flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span>{currentLocation.email}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
