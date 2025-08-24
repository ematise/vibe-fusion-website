import { Navbar } from "@/components/layout/navbar"
import { MenuImproved } from "@/components/sections/menu-improved"
import { Footer } from "@/components/layout/footer"

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <MenuImproved />
      </main>
      <Footer />
    </>
  )
}
