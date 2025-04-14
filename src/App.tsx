import { useState } from 'react'
import reactLogo from './assets/react.svg'
import brandLogo from '/favicon_n_b.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="/" target="_blank">
          <img src={brandLogo} className="logo" alt="Brand logo" />
        </a>
      </div>
      <h1>Mi Aplicación React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador: {count}
        </button>
        <p>
          Este es un proyecto React con TypeScript creado con Vite
        </p>
      </div>
      <p className="read-the-docs">
        Logo oficial de la marca integrado en el proyecto
      </p>
    </>
  )
}

export default App
