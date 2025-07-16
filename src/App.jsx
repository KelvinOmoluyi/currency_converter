import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components/index.js';

function App() {
  const[amount, setAmount] = useState()
  const[from, setFrom] = useState('usd')
  const[to, setTo] = useState('nig')
  const[convertedAmount, setConvertedAmount] = useState(0)

  // getting the object of currencies
  const currencyInfo = useCurrencyInfo(from)
  // getting the keys from the object
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // converting..., result based on the amount and "to" field
  const convert = () => {

    // note: you can also use [] to get values from objects too
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundColor: '#1e1e1e'}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox 
              label={from}
              amount={amount}
              currencyOptions={options}
              // this gets the new currency from the user, from the inputBox component
              onCurrencyChange={(currency) => setFrom(currency)}
              // this gets the new amount from the user also the same way
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrent={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox 
              label={to}
              amount={convertedAmount}
              currencyOptions={options}
              // this gets the new currency from the user, from the inputBox component
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrent={to}
              amountDisabled
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
