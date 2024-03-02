import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compoments/Header/Header'
import Footer from './compoments/Footer/Footer'
import Home from './compoments/Home/Home'

function App() {


  return (
  <div className='flex justify-center w-full items-center flex-col'>
    <Header/>
    <Home/>
    <Footer/>
  </div>
  
  )
}

export default App
