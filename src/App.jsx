import { useState } from 'react'
import './App.css'
import StarRating from './components/Star-rating/StarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StarRating stars={10}/>
    </>
  )
}

export default App
