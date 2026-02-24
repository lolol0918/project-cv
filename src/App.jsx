import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Builder from './pages/Builder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Builder></Builder>
    </>
  )
}

export default App
