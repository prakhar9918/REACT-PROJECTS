import { useState } from 'react'
import InputBox from "./components/Inputbox";
import useCurrencyInfo from "./hooks/useCurrencyInfo"


function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  console.log(currencyInfo)
  const options = Object.keys(currencyInfo || {})
  console.log(options)

  const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
    <h1>Currency Converter</h1>
    <form onSubmit={(e) => {
      e.preventDefault();
      convert();
    }}>
      <InputBox
       label = "From"
       amount = {amount}
       currencyOptions = {options}
       selectCurrency = {from}
       onAmountChange={(value) => setAmount(value)}   
       onCurrencyChange = {(currency) => setFrom(currency)}

      ></InputBox>
      <InputBox
      label = "To"
      amount = {convertedAmount}
      currencyOptions ={options}
      onCurrencyChange = {(currency) => setTo(currency)}
      selectCurrency = {to}
      ></InputBox>
      <button>Convert</button>
    </form>
    </>
  )
}

export default App
