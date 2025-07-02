import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Programs from './components/Programs.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CallToAction.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className="bg-[#0B132B] text-white min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Programs />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}
export default App
