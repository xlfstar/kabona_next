import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import Quality from '@/components/Quality'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Quality />
      <Contact />
      <Footer />
    </div>
  )
}
