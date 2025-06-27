
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Explore from './components/Explore'
import GetStarted from './components/GetsSarted'
import WhatsNew from './components/WhatsNew'
import World from './components/World'
import Insights from './components/Insights'
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
      <WhatsNew/>
      <World/>
      <Insights/>
    </div>


  )
}

export default App
