import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Quality from '@/components/Quality'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Quality />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
