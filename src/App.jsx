import { useState } from 'react'
import './App.css'
import AddCategory from './assets/components/AddCategory'
import DisplayGifs from './assets/components/DisplayGifs'

function App() {
  const [category, setCategory] = useState("")

  return (
    <div className='App'>
      <h2>Gifs Expert</h2>
      <AddCategory setCategory = {setCategory}/>
      <DisplayGifs category={category}/>
    </div>
  )
}

export default App
