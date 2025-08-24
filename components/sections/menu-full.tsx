"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/i18n"
import { Flame, Clock, Weight } from "lucide-react"

interface Product {
  name: string
  description: string
  weight?: {
    value: number
    unit: string
  }
  price_ron: number
  spicy: boolean
  image_url: string
  picture_name: string | null
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

export function MenuFull() {
  const { t } = useTranslation()
  const [menuData, setMenuData] = useState<MenuData | null>(null)
  const [selectedMenu, setSelectedMenu] = useState<string>("")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch('/menu/complete_menu.json')
        const data = await response.json()
        setMenuData(data)
        if (data.menus.length > 0) {
          setSelectedMenu(data.menus[0].name)
          if (data.menus[0].subcategories.length > 0) {
            setSelectedSubcategory(data.menus[0].subcategories[0].name)
          }
        }
      } catch (error) {
        console.error('Error loading menu data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMenuData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-accent/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto mb-4"></div>
          <p className="text-brand-dark">Loading menu...</p>
        </div>
      </div>
    )
  }

  if (!menuData) {
    return (
      <div className="min-h-screen bg-brand-accent/10 flex items-center justify-center">
        <p className="text-brand-dark">Error loading menu data</p>
      </div>
    )
  }

  const currentMenu = menuData.menus.find(menu => menu.name === selectedMenu)
  const currentSubcategory = currentMenu?.subcategories.find(sub => sub.name === selectedSubcategory)

  return (
    <div className="min-h-screen bg-brand-accent/10">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-serif text-brand-dark mb-4">
              {t("menu.title")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("menu.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Menu Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 py-4">
            {menuData.menus.map((menu) => (
              <Button
                key={menu.name}
                variant={selectedMenu === menu.name ? "default" : "outline"}
                onClick={() => {
                  setSelectedMenu(menu.name)
                  if (menu.subcategories.length > 0) {
                    setSelectedSubcategory(menu.subcategories[0].name)
                  }
                }}
                className="font-medium"
              >
                {menu.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Subcategory Navigation */}
      {currentMenu && currentMenu.subcategories.length > 0 && (
        <div className="bg-brand-accent/20 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 py-4">
              {currentMenu.subcategories.map((subcategory) => (
                <Button
                  key={subcategory.name}
                  variant={selectedSubcategory === subcategory.name ? "secondary" : "ghost"}
                  onClick={() => setSelectedSubcategory(subcategory.name)}
                  className="font-medium"
                >
                  {subcategory.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div className="container mx-auto px-4 py-8">
        {currentSubcategory && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold font-serif text-brand-dark mb-2">
              {currentSubcategory.name}
            </h2>
            <div className="w-20 h-1 bg-brand-primary rounded-full mb-8"></div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSubcategory?.products.map((product, index) => (
            <Card key={index} className="card-hover overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                {product.picture_name ? (
                  <Image
                    src={`/${product.image_url}`}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-brand-accent/30 flex items-center justify-center">
                    <div className="text-brand-primary text-6xl font-serif">V</div>
                  </div>
                )}
                {product.spicy && (
                  <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
                    <Flame className="h-3 w-3 mr-1" />
                    Spicy
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-brand-primary">
                      {product.price_ron} RON
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  {product.weight && (
                    <div className="flex items-center">
                      <Weight className="h-3 w-3 mr-1" />
                      {product.weight.value}{product.weight.unit}
                    </div>
                  )}
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {selectedMenu.includes("Brunch") ? "10:00-14:00" : "All day"}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {(!currentSubcategory || currentSubcategory.products.length === 0) && (
          <div className="text-center py-12">
            <div className="text-6xl font-serif text-brand-primary mb-4">V</div>
            <h3 className="text-xl font-semibold text-brand-dark mb-2">No items available</h3>
            <p className="text-gray-600">Please select a different category or subcategory.</p>
          </div>
        )}
      </div>
    </div>
  )
}
