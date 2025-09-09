"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/i18n"
import { H1, H2, H3 } from "@/components/ui/headings"
import { Flame, Clock, Weight, ArrowLeft, MapPin } from "lucide-react"
import { PageHero } from "./page-hero"

interface Product {
  name: string
  description: string
  weight?: {
    value: number
    unit: string
  }
  price_ron: number
  spicy: boolean
  image_url: string | null
  picture_name: string | null
  verticalOffset?: number
}

interface Subcategory {
  name: string
  image_url: string
  products: Product[]
}

interface Menu {
  name: string
  subcategories: Subcategory[]
}

interface MenuData {
  restaurant: {
    name: string
    source_url: string
    locale: string
    scraped_at: string
  }
  menus: Menu[]
}

type ViewState = 'location' | 'subcategories' | 'items'
type Location = 'cluj' | 'brasov'

export function MenuImproved() {
  const { t } = useTranslation()
  const [menuData, setMenuData] = useState<MenuData | null>(null)
  const [loading, setLoading] = useState(false)
  const [viewState, setViewState] = useState<ViewState>('location')
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0)
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null)
  const mainContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedLocation) {
      fetchMenuData(selectedLocation)
    }
  }, [selectedLocation])

  // Scroll to main container when switching to items view
  useEffect(() => {
    if (viewState === 'items' && mainContainerRef.current) {
      // Use setTimeout to ensure DOM has updated
      setTimeout(() => {
        const element = mainContainerRef.current
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - 80 // Adjust by 100px higher

          window.scrollTo({
            top: offsetPosition,
            behavior: 'instant'
          })
        }
      }, 100)
    }
  }, [viewState])

  const fetchMenuData = async (location: Location) => {
    try {
      setLoading(true)
      const response = await fetch(`/menu/${location}/menu_ro.json`)
      if (!response.ok) {
        throw new Error('Failed to fetch menu data')
      }
      const data = await response.json()
      setMenuData(data)
    } catch (error) {
      console.error('Error loading menu data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCategoryClick = (categoryIndex: number) => {
    setSelectedCategoryIndex(categoryIndex)
    setSelectedSubcategory(null)
    setViewState('subcategories')
  }

  const handleSubcategoryClick = (subcategory: Subcategory) => {
    setSelectedSubcategory(subcategory)
    setViewState('items')
  }

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location)
    setViewState('subcategories')
    setSelectedCategoryIndex(0)
    setSelectedSubcategory(null)
  }

  const handleBackToLocation = () => {
    setSelectedLocation(null)
    setViewState('location')
    setMenuData(null)
  }

  const handleBackToSubcategories = () => {
    setSelectedSubcategory(null)
    setViewState('subcategories')
  }

  if (loading) {
    return (
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading menu...</p>
          </div>
        </div>
    )
  }

  // Only show error if location is selected but menu data failed to load
  if (selectedLocation && !loading && !menuData) {
    return (
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600">Failed to load menu data.</p>
          </div>
        </div>
    )
  }

  const selectedCategory = selectedLocation && menuData ? menuData.menus[selectedCategoryIndex] : null

  return (
      <div>

        {/* Location Selection */}
        {viewState === 'location' && (
            <div className="container mx-auto px-4 py-12">
              <div className="text-center mb-8">
                <H2 size="lg" weight="bold" className="mb-4 text-center">
                  {t("menu.selectLocation")}
                </H2>
                <p className="text-gray-600 text-lg">
                  {t("menu.selectLocationDescription")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card
                    className="cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden rounded-2xl"
                    onClick={() => handleLocationSelect('cluj')}
                >
                  <div className="relative h-64 text-center">
                    <Image
                        src="/restaurant/vibe-cluj.jpg"
                        alt="Vibe Cluj-Napoca"
                        fill
                        className="object-cover"
                    />
                    <div className="text-center absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="text-center absolute bottom-3 left-0 right-0 p-6 text-white">
                      <div className="flex items-center mb-2 justify-center">
                        <H3 size="lg" weight="bold" className="text-white mb-0 !text-5xl">{t("menu.clujLocation")}</H3>
                      </div>
                      <p className="text-gray-200 text-sm">Strada Zorilor 25</p>
                    </div>
                  </div>
                </Card>

                <Card
                    className="cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden rounded-2xl"
                    onClick={() => handleLocationSelect('brasov')}
                >
                  <div className="relative h-64">
                    <Image
                        src="/restaurant/vibe-brasov.jpg"
                        alt="Vibe Brașov"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-0 right-0 p-6 text-white">
                      <div className="flex items-center mb-2 justify-center">
                        <H3 size="lg" weight="bold" className="text-white mb-0 !text-5xl">{t("menu.brasovLocation")}</H3>
                      </div>
                      <p className="text-gray-200 text-sm text-center">Strada Valentin Wagner 4</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
        )}

        {/* Menu Content - Only show when location is selected */}
        {selectedLocation && menuData && (
            <div ref={mainContainerRef} className="container mx-auto px-4 py-8 pt-0">

              {/* Location Header with Back Button */}
              <div className="flex items-center mb-1 shadow-sm">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBackToLocation}
                    className="mr-3 p-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <span className="font-semibold text-lg">
                  {selectedLocation === 'cluj' ? t("menu.clujLocation") : t("menu.brasovLocation")}
                </span>
              </div>

              {/* Category Tabs */}
              <div className="mb-4 sticky top-20 z-10 bg-white py-4 -mx-4 px-4 pb-0 pt-2 shadow-sm">
                <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar">
                  {menuData.menus.map((category, index) => (
                      <button
                          key={index}
                          onClick={() => handleCategoryClick(index)}
                          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                              selectedCategoryIndex === index
                                  ? 'bg-brand-primary text-white'
                                  : 'bg-white text-brand-primary border-brand-primary'
                          }`}
                      >
                        {category.name}
                      </button>
                  ))}
                </div>
              </div>

              {/* Subcategories View */}
              {viewState === 'subcategories' && selectedCategory && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedCategory.subcategories.map((subcategory, index) => (
                          <Card
                              key={index}
                              className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden rounded-2xl"
                              onClick={() => handleSubcategoryClick(subcategory)}
                          >
                            <div className="relative h-64">
                              {subcategory.image_url ? (
                                  <Image
                                      src={`/${subcategory.image_url.replace('images/', `images/${selectedLocation}/`)}`}
                                      alt={subcategory.name}
                                      fill
                                      className="object-cover object-center"
                                  />
                              ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                                    <span className="text-white text-lg font-semibold">No Image</span>
                                  </div>
                              )}
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="text-center text-white w-full px-4">
                                  <H3 size="lg" weight="semibold" className="mb-2 drop-shadow-lg text-white !text-center">{subcategory.name}</H3>
                                  <p className="text-sm opacity-90 drop-shadow-md">{subcategory.products.length} {t("menu.items")}</p>
                                </div>
                              </div>
                            </div>
                          </Card>
                      ))}
                    </div>
                  </div>
              )}

              {/* Items View */}
              {viewState === 'items' && selectedSubcategory && (
                  <div>
                    <div className="flex items-center mt-6 mb-2">
                      <Button
                          variant="ghost"
                          onClick={handleBackToSubcategories}
                          className="mr-4 p-2 -mt-4"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </Button>
                      <H2 size="md" weight="semibold">{selectedSubcategory.name}</H2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedSubcategory.products.map((product, index) => (
                          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow rounded-2xl">
                            <div className="relative h-72">
                              {product.image_url ? (
                                  <div
                                      className="w-full h-full bg-cover bg-no-repeat"
                                      style={{
                                        backgroundImage: `url(/${product.image_url.replace('images/', `images/${selectedLocation}/`)})`,
                                        backgroundPosition: `center ${50 + (product.verticalOffset || 0)}%`
                                      }}
                                  />
                              ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <span className="text-gray-500 text-sm">No Image</span>
                                  </div>
                              )}
                              {product.spicy && (
                                  <div className="absolute top-3 right-3">
                                    <Badge variant="destructive" className="bg-red-500 hover:bg-red-600">
                                      <Flame className="h-3 w-3 mr-1" />
                                      Spicy
                                    </Badge>
                                  </div>
                              )}
                            </div>
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <H3 size="sm" weight="semibold" className="">{product.name}</H3>
                                <span className="text-lg font-bold text-brand-primary ml-2">{product.price_ron} RON</span>
                              </div>

                              {product.description && (
                                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                              )}

                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                {product.weight && (
                                    <div className="flex items-center gap-1">
                                      <Weight className="h-3 w-3" />
                                      <span>{product.weight.value}{product.weight.unit}</span>
                                    </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                      ))}
                    </div>
                  </div>
              )}
            </div>
        )}
      </div>
  )
}
