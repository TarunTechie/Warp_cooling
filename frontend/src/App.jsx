import { useState } from 'react'
import './App.css'
import Top from './components/top'
import Products from './components/products'
import About from './components/about'
import Bottom  from './components/bottom'
import Pics from './components/pics'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top/>
      <div className='md:h-screen sm:h-full' id='hom'><Pics/></div>
      <h1 className='mt-28 heading'></h1>
      <About/>
      <h1 className='mt-28 heading'>PRODUCTS</h1>
      <Products/>
      <Bottom/>
    </>
  )
}

export default App
