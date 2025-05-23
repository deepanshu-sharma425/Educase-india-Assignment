import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landingpage from './assets/components/Page1/landingpage'
import Sigin from './assets/components/page2/sigin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/sigin" element={<Sigin />} />
        <Route path="/login" element={<Sigin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
