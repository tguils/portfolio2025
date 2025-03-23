import Header from './components/Header'
import About from './components/About'
import Highlights from './components/Highlights'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Stack from './components/Stack';





export default function Home() {
  return (
    <main className="bg-white font-sans">
      <Header />
      <About />
      <Highlights />
      <Stack />
      <Contact />
     <Footer />
    </main>
  )
}
