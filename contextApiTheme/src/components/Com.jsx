import React from 'react'
import ThemeContext from '../context/ThemeContext'
import { useContext} from 'react'


function com() {
    const {theme} = useContext(ThemeContext)
  return (
   <div>
       <h2 style={{color: theme === 'light' ? 'red' : 'blue'}}>Theme Context Example</h2>
       <p>theme: {theme}</p>
   </div>
  )
}

export default com