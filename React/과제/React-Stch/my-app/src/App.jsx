import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(2)


  const handler = () => {
  }

  return (
    <>
    number : {number}
    <br/>
    <button onClick={handler}>상태 업데이트!</button>
    </>
  )
}

export default App
