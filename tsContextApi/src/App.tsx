import { useState } from 'react'
import './App.css'

function App() {

  function MyButton({title}: {title: string}) {
    return (
      <button>
        {title}
      </button>
    )
  }

  return (
    <>
    <div>
      <h1>My app</h1>
      <MyButton title="Hello"/>  
    </div>   
    </>
  )
}

export default App
