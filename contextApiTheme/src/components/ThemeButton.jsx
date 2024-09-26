import React from 'react'
import ThemeContext from '../context/ThemeContext'
import {useState, useContext} from 'react'


function ThemeButton() {
    // const [t, setT] = useState('light')
    const {theme, setTheme} = useContext(ThemeContext)

  return (
    <button
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
        {theme}

    </button>
  )
}

export default ThemeButton