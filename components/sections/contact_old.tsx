import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Contact() {
  return (
    <section className="py-20 bg-brand-accent/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-brand-dark mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Come experience the vibrant atmosphere and exceptional cuisine at our locations. 
            We can't wait to welcome you to the Vibe experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-brand-primary" />
                  <span>Locations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700">Cluj-Napoca</p>
                    <p className="text-gray-600 text-sm">Follow us on Instagram for exact location updates</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Brașov</p>
                    <p className="text-gray-600 text-sm">Our second location in beautiful Brașov</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-brand-primary" />
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+40 123 456 789</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-brand-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">info@vibefusion.com</p>
              </CardContent>
            </Card>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-brand-primary" />
                  <span>Opening Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Thursday</span>
                    <span className="text-gray-700 font-medium">11:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Friday - Saturday</span>
                    <span className="text-gray-700 font-medium">11:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-700 font-medium">12:00 - 22:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Instagram className="h-5 w-5 text-brand-primary" />
                  <span>Follow Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">Follow us for updates and behind-the-scenes content</p>
                    <div className="flex flex-col space-y-3">
                      <Button asChild variant="outline" className="w-full">
                        <Link 
                          href="https://www.instagram.com/vibefusion.cluj/" 
                          target="_blank"
                          className="inline-flex items-center space-x-2"
                        >
                          <Instagram className="h-4 w-4" />
                          <div className="text-left">
                            <span className="font-medium">@vibefusion.cluj</span>
                            <span className="text-xs text-gray-500 ml-2">Cluj-Napoca</span>
                          </div>
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link 
                          href="https://www.instagram.com/vibefusion__/" 
                          target="_blank"
                          className="inline-flex items-center space-x-2"
                        >
                          <Instagram className="h-4 w-4" />
                          <div className="text-left">
                            <span className="font-medium">@vibefusion__</span>
                            <span className="text-xs text-gray-500 ml-2">Brașov</span>
                          </div>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 