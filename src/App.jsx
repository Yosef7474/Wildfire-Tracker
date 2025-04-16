import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './components/map'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='map'>
    <Map/>

  </div>
  </>
  )
}

export default App
