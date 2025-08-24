import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section className="py-20 bg-brand-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold font-serif text-brand-dark mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Vibe, we believe in the power of exceptional hospitality and culinary excellence. 
                Our restaurant and bar concept brings together carefully curated dishes, premium beverages, 
                and an atmosphere that captures the vibrant spirit of Cluj-Napoca.
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Our talented chefs combine traditional cooking techniques with modern interpretations, 
              using only the finest local and international ingredients. Every dish is crafted with 
              care, attention to detail, and a deep respect for the culinary arts.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">5+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">50+</div>
                  <div className="text-sm text-gray-600">Fusion Dishes</div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">15+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/restaurant/vibe-restaurant-table.jpg"
                alt="Vibe restaurant elegant table setting and atmosphere"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary rounded-lg opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-secondary rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 