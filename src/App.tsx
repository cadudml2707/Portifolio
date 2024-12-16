import { useState } from 'react'
import './App.css'

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import '../node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { PrimeReactProvider } from 'primereact/api';

import Menu from './pages/menu';
import Experiencias from './pages/experiencias';

function App() {

  return (
    <PrimeReactProvider>
      <Menu />
    </PrimeReactProvider>
  )
}

export default App
