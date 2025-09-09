import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { Welcome } from "@/components/sections/welcome"
import { TableSetting } from "@/components/sections/table-setting"
import { TryOurMenu } from "@/components/sections/try-our-menu"
import { DiscoverVenue } from "@/components/sections/discover-venue"
import { Footer } from "@/components/layout/footer"
import { InstagramGallery } from "@/components/sections/instagram-gallery"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Welcome />
        <TryOurMenu />
        <TableSetting />
        <DiscoverVenue />
        <InstagramGallery />
      </main>
      <Footer />
    </>
  )
} 