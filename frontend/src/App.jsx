import { useState } from 'react'
import frLogo from './assets/logo.png' // Ensure this path is correct relative to App.jsx
import './App.css'

// Note: Removed unused imports 'reactLogo', 'viteLogo' for clarity.

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Your Logo Code - Simplified to only show your logo and link */}
        <a href="https://react.dev" target="_blank">
          <img 
            src={frLogo} 
            className="logo fr-logo" // Added a unique class for styling
            alt="Music Feed Logo" 
          />
        </a>
      </div>
      <h1>Vite + React - Music App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Start building your music post feed here!
        </p>
      </div>
    </>
  )
}

export default App