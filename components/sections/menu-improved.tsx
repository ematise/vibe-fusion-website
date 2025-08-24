"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/i18n"
import { Flame, Clock, Weight, ArrowLeft } from "lucide-react"

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

type ViewState = 'subcategories' | 'items'

export function MenuImproved() {
  const { t } = useTranslation()
  const [menuData, setMenuData] = useState<MenuData | null>(null)
  const [loading, setLoading] = useState(true)
  const [viewState, setViewState] = useState<ViewState>('subcategories')
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0)
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null)

  useEffect(() => {
    fetchMenuData()
  }, [])

  const fetchMenuData = async () => {
    try {
      const response = await fetch('/menu/complete_menu.json')
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

  if (!menuData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600">Failed to load menu data.</p>
        </div>
      </div>
    )
  }

  const selectedCategory = menuData.menus[selectedCategoryIndex]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[200px] mb-6">
        <Image
          src="/menu-hero.jpeg"
          alt="Menu Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="!text-2xl !md:text-4xl font-semibold text-white text-center drop-shadow-lg">
            {t("menu.hero")}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pt-0">

      {/* Category Tabs - Always Visible */}
      <div className="mb-2">
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {menuData.menus.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                selectedCategoryIndex === index
                  ? 'bg-brand-primary text-white'
                  : 'bg-white text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white'
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
                      src={`/${subcategory.image_url}`}
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
                      <h3 className="font-semibold text-3xl mb-2 drop-shadow-lg">{subcategory.name}</h3>
                      <p className="text-sm opacity-90 drop-shadow-md">{subcategory.products.length} items</p>
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
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              onClick={handleBackToSubcategories}
              className="mr-4 p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-2xl font-semibold text-brand-dark">{selectedSubcategory.name}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedSubcategory.products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow rounded-2xl">
                <div className="relative h-72">
                  {product.image_url ? (
                    <div 
                      className="w-full h-full bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(/${product.image_url})`,
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
                    <h3 className="font-semibold text-brand-dark line-clamp-1">{product.name}</h3>
                    <span className="text-lg font-bold text-brand-primary ml-2">{product.price_ron} RON</span>
                  </div>
                  
                  {product.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
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
    </div>
  )
}
