// Node Modules
import React from 'react'

// Components
import ConverterForm from './components/ConverterForm'

function App() {
  return (
    <>
      <div className="currency-converter">
        <h2 className="converter-title">Currency converter</h2>

        <ConverterForm/>
      </div>
    </>
  )
}

export default App