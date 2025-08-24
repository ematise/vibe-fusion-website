import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Contact } from "@/components/sections/contact"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
