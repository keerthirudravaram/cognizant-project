import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Login from './pages/Login.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
    <Login></Login>
    </>
  )
}

export default App
