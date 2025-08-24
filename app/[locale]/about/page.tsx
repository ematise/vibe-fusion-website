import { Navbar } from "@/components/layout/navbar"
import { About } from "@/components/sections/about"
import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <About />
      </main>
      <Footer />
    </>
  )
}
