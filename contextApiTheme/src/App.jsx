import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Com from './components/Com'
import ThemeContextProvider from './context/ThemeContextProvider'
import ThemeButton from './components/ThemeButton'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeContextProvider>
      <h1>Theme Context Example</h1>
      <Com/>
      <ThemeButton />
      
    </ThemeContextProvider>
  )
}

export default App
