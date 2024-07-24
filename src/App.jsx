import { useState } from 'react'
import './App.css'
import FirstPage from './sources/FirstPage/FirstPage'
import SecondPage from './sources/SecondPage/SecondPage'
import ThirdPage from './sources/ThirdPage/ThirdPage'
import ForthPage from './sources/ForthPage/ForthPage'

function App() {


  return (
    <>
    <div className="App">
      <FirstPage />
      <ForthPage/>
      <SecondPage/>
      <ThirdPage/>
      <div className='footer'>© 2024 Harris johnsen. All rights reserved</div>
    </div>

    </>
  )
}

export default App
