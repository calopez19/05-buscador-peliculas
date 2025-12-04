import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>

      <h1>App para buscar peliculas</h1>
      <form action="" className="formulario">
        <input type="text" className="buscador" placeholder='avengers, starwars....' />
        <button type='submit'>Search movie</button>
      </form>
      </header>
      <main>
        peliculas
      </main>
    </>
  )
}

export default App
