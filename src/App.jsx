
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {


  return (
    <div className='bg-primary-black overflow-hidden ' > 
      <Navbar />
      <Hero/>
      <About/>
</div>

    
  )
}

export default App
