import { useState } from 'react'
import {Inputbox} from './components'
import {userCurrencyInfo} from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Currency Converter</h1>
    </>
  )
}

export default App
