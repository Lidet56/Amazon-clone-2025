import { useState } from 'react'
import Header from './components/Header/Header'
import LowerHeader from './components/Header/LowerHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <LowerHeader/>
      
      
    </>
  )
}

export default App
