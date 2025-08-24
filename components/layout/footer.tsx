"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-6 pr-6 md:col-span-2">
            <div className="">
              <img 
                src="/vibe-logo-white-transparent-bg.png" 
                alt="Vibe Restaurant | Bar" 
                className="h-32 w-auto"
              />

            </div>

            <p className="text-gray-100 mt-8">
              {t("footer.description")}
            </p>
          </div>

          {/* Cluj Location */}
          <div className="space-y-4 mt-8">
            <h4 className="text-lg font-semibold text-gray-50">Cluj</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-50 mt-0.5 flex-shrink-0" />
                <Link 
                  href="https://maps.google.com/maps?q=Vibe+Fusion+%26+Restaurant+Sushi+Cluj"
                  target="_blank"
                  className="text-gray-50 hover:text-brand-secondary transition-colors"
                >
                  <p className="text-sm">Strada Zorilor 25</p>
                  <p className="text-sm">Cluj-Napoca 400535, România</p>
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-50 flex-shrink-0" />
                <Link 
                  href="tel:0723072720"
                  className="text-sm text-gray-50 hover:text-brand-secondary transition-colors"
                >
                  0723 072 720
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-50 flex-shrink-0" />
                <Link 
                  href="mailto:cluj@vibefusion.com"
                  className="text-sm text-gray-50 hover:text-brand-secondary transition-colors"
                >
                  cluj@vibefusion.com
                </Link>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <Link 
                  href="https://www.instagram.com/vibefusion.cluj/" 
                  target="_blank"
                  className="text-gray-100 hover:text-brand-secondary transition-colors flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-gray-50 text-sm hover:text-brand-secondary transition-colors">@vibefusion.cluj</span>
                </Link>
              </div>
              <div className="mt-4 w-2/3">
                <div className="space-y-1 text-xs text-gray-50 border border-brand-accent rounded-xl p-3 mt-6">
                  <div className="flex justify-between">
                    <span>{t("footer.mondayToSunday")}</span>
                    <span>10:00 - 22:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brasov Location */}
          <div className="space-y-4 mt-8">
            <h4 className="text-lg font-semibold text-gray-50">Brașov</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-50 mt-0.5 flex-shrink-0" />
                <Link 
                  href="https://maps.google.com/maps?q=Vibe+Restaurant+Sushi+Brasov+%26+Cocktail+Bar"
                  target="_blank"
                  className="text-gray-50 hover:text-brand-secondary transition-colors"
                >
                  <p className="text-sm">Strada Valentin Wagner 4</p>
                  <p className="text-sm">Brașov 500031, România</p>
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-50 flex-shrink-0" />
                <Link 
                  href="tel:0736924117"
                  className="text-sm text-gray-50 hover:text-brand-secondary transition-colors"
                >
                  0736 924 117
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-50 flex-shrink-0" />
                <Link 
                  href="mailto:brasov@vibefusion.com"
                  className="text-sm text-gray-50 hover:text-brand-secondary transition-colors"
                >
                  brasov@vibefusion.com
                </Link>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <Link 
                  href="https://www.instagram.com/vibefusion__/" 
                  target="_blank"
                  className="text-gray-100 hover:text-brand-secondary transition-colors flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-gray-50 text-sm hover:text-brand-secondary transition-colors">@vibefusion__</span>
                </Link>
              </div>
              <div className="mt-4 w-2/3">
                <div className="space-y-1 text-xs text-gray-50 border border-brand-accent rounded-xl p-3 mt-6">
                  <div className="flex justify-between">
                    <span>{t("footer.monday")}</span>
                    <span>11:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("footer.friday")}</span>
                    <span>11:00 - 22:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("footer.saturday")}</span>
                    <span>12:00 - 22:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("footer.sunday")}</span>
                    <span>12:00 - 22:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
} 