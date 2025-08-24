import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Reservations } from "@/components/sections/reservations"

export default function ReservationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Reservations />
      </main>
      <Footer />
    </>
  )
}
