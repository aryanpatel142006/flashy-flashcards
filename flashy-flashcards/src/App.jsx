import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <div className='App'>
      <div className="header">
        <h4>Flashy</h4>
      </div>
      <div className="heading"><h1>Learn Japanese</h1>
      <div className="discription">
        <h3>Most Fun, Simple and Fastest way to learn Japanese through spaced repition!</h3>
      </div>
      <h4>Number of Cards :</h4>
   

      </div>
      <Card />
      
      
    </div>
  )
   
}

export default App
