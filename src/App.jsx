
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Explore from './components/Explore'
import GetStarted from './components/GetsSarted'

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
      <GetStarted/>
    </div>


  )
}

export default App
