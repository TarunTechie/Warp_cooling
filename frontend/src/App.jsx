import { useState } from 'react'
import './App.css'
import Top from './components/top'
import Products from './components/products'
import Product_page from './pages/product_page'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top/>
      <h1 className='mt-28 heading'>PRODUCTS</h1>
      <Products/>
    </>
  )
}

export default App
