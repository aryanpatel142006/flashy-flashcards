import { useState } from 'react'
import './App.css'
import {side,Card} from './components/card'
import flashcards from "./assets/card_input.jsx"

function App() {
  const [currentIndex,setCurrentIndex] = useState(0);

  const showRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    // side = "front";
    console.log(side)
    setCurrentIndex(randomIndex);
  };

  return (
    <div className='App'>
      <div className="header">
        <h4>Flashy</h4>
      </div>
      <div className="heading">
        <h1>Learn Japanese</h1>
        <div className="discription">
          <h3>Most Fun, Simple and Fastest way to learn Japanese through spaced repition!</h3>
        </div>
        <h4>Number of Cards :</h4>
      </div>
      <div className="main">
        <button>{"<-"}</button>
        <Card question={flashcards[currentIndex].question} answer={flashcards[currentIndex].answer}/>
        <button onClick={showRandomCard}>{"->"}</button>
      </div>
    </div>
  )
}

export default App
