import { useState } from 'react'
import './App.css'

import '../node_modules/primeflex/primeflex.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

function App() {
  return (
    <PrimeReactProvider>
      <div className='p-5 border-solid border-1 border-yellow-500 border-round-3xl'>
        <h1>Opaaa!</h1>
      </div>
    </PrimeReactProvider>
  )
}

export default App
