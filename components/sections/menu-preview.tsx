import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { formatPrice } from "@/lib/utils"

const featuredDishes = [
  {
    id: 1,
    name: "Miso Glazed Salmon",
    description: "Fresh salmon glazed with our house-made miso sauce, served with jasmine rice",
    price: 85,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    category: "Main Course"
  },
  {
    id: 2,
    name: "Fusion Ramen Bowl",
    description: "Our signature ramen with Romanian influences and rich broth",
    price: 65,
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80",
    category: "Main Course"
  },
  {
    id: 3,
    name: "Asian Spring Rolls",
    description: "Crispy spring rolls with fresh vegetables and signature dipping sauce",
    price: 28,
    image: "https://images.unsplash.com/photo-1559847844-d90b3ef20bac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "Appetizer"
  }
]

export function MenuPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-brand-dark mb-4">
            Featured Dishes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover some of our most popular dishes crafted with the finest ingredients 
            and presented with culinary artistry that defines the Vibe experience.
          </p>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredDishes.map((dish) => (
            <Card key={dish.id} className="card-hover overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="menu-item-image"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                    {dish.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold">{dish.name}</CardTitle>
                  <span className="text-lg font-bold text-brand-primary">
                    {formatPrice(dish.price)}
                  </span>
                </div>
                <CardDescription className="text-gray-600">
                  {dish.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="bg-brand-accent/30 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold font-serif text-brand-dark mb-6 text-center">
            Menu Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Appetizers", count: "12+", icon: "🥗" },
              { name: "Main Courses", count: "25+", icon: "🍽️" },
              { name: "Desserts", count: "8+", icon: "🍰" },
              { name: "Beverages", count: "15+", icon: "🍹" }
            ].map((category) => (
              <div key={category.name} className="text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h4 className="font-semibold text-brand-dark mb-1">{category.name}</h4>
                <p className="text-sm text-gray-600">{category.count} dishes</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 