import { useState } from 'react'
import './App.css'

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import '../node_modules/primeflex/primeflex.css';

import Footer from './assets/batman.jpeg';
import Header from './assets/batman.jpeg';

import { PrimeReactProvider } from 'primereact/api';
import { Card } from 'primereact/card';

function App() {

  const footer = (
    <div>
      <img src={Footer} alt="Footer Image" className="w-full" />
    </div>
  );

  const header = (
    <div>
      <img src={Header} alt="Header Image" className="w-full" />
    </div>
  );

  return (
    <PrimeReactProvider>
      <div className='flex flex-column gap-3'>
        <div className='flex flex-row gap-5 p-3 border-solid border-1 border-yellow-500 border-round-3xl'>
          <p>opa</p>
          <p>opa</p>
          <p>opa</p>
        </div>
        <div className='flex flex-column p-5 gap-5 border-solid border-1 border-yellow-700 border-round-3xl mx-8'>
          <h1>TESTE</h1>
          <Card title="Simple Card">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
          <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </div>
      </div>
    </PrimeReactProvider>
  )
}

export default App
