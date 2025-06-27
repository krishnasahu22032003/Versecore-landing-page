
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Explore from './components/Explore'

function App() {


  return (
    <div className='bg-primary-black overflow-hidden ' >
      <Navbar />
      <Hero />
      <div className='relative'>
        <About />
        <div className='gradient-03 z-0' />
        <Explore />
      </div>
    </div>


  )
}

export default App
