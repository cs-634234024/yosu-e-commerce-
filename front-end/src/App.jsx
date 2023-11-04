import { useState } from 'react'
import {default as Router} from './routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router/>
    </>
  )
}

export default App
