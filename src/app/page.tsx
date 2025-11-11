import { Header } from "@/components/landingpage/header"
import { Hero } from "@/components/landingpage/hero"
import { Features } from "@/components/landingpage/features"
import { HowItWorks } from "@/components/landingpage/how-it-works"
import { CTA } from "@/components/landingpage/cta"
import { Footer } from "@/components/landingpage/footer"

export default function Home() {
  return (
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <Footer />
      </main>
  )
}
