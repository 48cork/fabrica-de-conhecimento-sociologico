import Hero from '@/src/app/components/hero'
import Problem from '@/src/app/components/problem'
import ClassTension from '@/src/app/components/class-tension'
import Solution from '@/src/app/components/solution'
import Testimonials from '@/src/app/components/testimonials'
import LeadForm from '@/src/app/components/lead-form'
import Footer from '@/src/app/components/footer'

export default function Home() {
  return (
    <main className="bg-[#0a0f1e] min-h-screen">
      <Hero />
      <Problem />
      <ClassTension />
      <Solution />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  )
}
