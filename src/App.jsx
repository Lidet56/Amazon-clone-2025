import { useState } from 'react'
import Header from './components/Header/Header'
import LowerHeader from './components/Header/LowerHeader'
import Carousel from './components/Carousel/Carousel'
import Category from './components/Category/Category'
import Product from './components/Product/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <LowerHeader />
    <Carousel />
    <Category />
    <Product/>
      
      
    </>
  )
}

export default App
 