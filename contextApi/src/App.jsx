import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <UserContextProvider>
      {/* Everyything here will be rendered by the provider as children*/}
      {/* And will be aware of the context */}
      <h1>Context API Example</h1>

      <Login/>
      <Profile/>

      <p> More components to come which will need profile data</p>


    </UserContextProvider>
  )
}

export default App
