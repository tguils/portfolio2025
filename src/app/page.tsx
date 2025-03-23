import Header from './components/Header'
import About from './components/About'
import Highlights from './components/Highlights'
import Footer from './components/Footer'
import Contact from './components/Contact'


export default function Home() {
  return (
    <main className="bg-white font-sans">
      <Header />
      <About />
      <Highlights />
      <Contact />
      <Footer />
    </main>
  )
}
