import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <diV className="test">테스트 용 div입니다</diV>
      <h2>SCSS 변수 연습</h2>
      <ul>
        <li>안녕하세요</li>
        <li>반갑습니다</li>
        <li>scss를</li>
        <li>공부 해봅시다</li>
      </ul>
      <setction>
        <article>SCSS문법에는</article>
        <article>변수사용과</article>
        <article>중첩 문법과</article>
        <article>믹스인 등이 있습니다</article>
      </setction>
    </>
  )
}

export default App
