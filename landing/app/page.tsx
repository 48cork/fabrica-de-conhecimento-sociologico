import Hero from '@/src/app/components/hero'
import Problem from '@/src/app/components/problem'
import Solution from '@/src/app/components/solution'
import Testimonials from '@/src/app/components/testimonials'
import LeadForm from '@/src/app/components/lead-form'
import Footer from '@/src/app/components/footer'

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  )
}
