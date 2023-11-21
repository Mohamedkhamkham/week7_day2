import { useState } from 'react'
import './App.css'
import Counter from './Counter/Counter'
import LikeButton from './LikeButton/LikeButton'

function App() {

  const [theme, setTheme] = useState('light')

  const handleTheme = event => {
    const { value } = event.target
    setTheme(value)
  }


  return (
    <div className={`App ${theme}`}>

      <h1>Estado y eventos en ReactJS</h1>

      <hr />

      <select onChange={handleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
        <option value="hc"> High contrast </option>
      </select>

      <hr />

      <Counter />
      <LikeButton />
    </div>
  )
}

export default App