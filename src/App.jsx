import { useState } from 'react'
import './App.css'
import Card from './components/card'
import flashcards from "./assets/card_input.jsx"
import them from "./assets/theme_icon.png"
import flashyy from "/src/assets/flashy.png"


function App() {

  // const [theme,setTheme] = useState('light-theme');

  // const handleThemeChange = () => {

  //   setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
  //   document.body.className = theme;
  // }

  const themes = [ 'blue-theme','dark-theme','light-theme' ];
  const [themeIndex, setThemeIndex] = useState(0);

  const handleThemeChange = () => {
  const nextIndex = (themeIndex + 1) % themes.length;
  setThemeIndex(nextIndex);
  document.body.className = themes[nextIndex];
};

  const [side, setSide] = useState("front");
  const [currentIndex,setCurrentIndex] = useState(0);

  // {document.getElementById("CARD").className = "flashcard";
  // document.getElementById("CARD").classList += " " + side;}
  
  const showRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    // setSide( side==="front" ? "back" : "back");
    setSide("front")
    console.log(side)
    setCurrentIndex(randomIndex);
    // console.log(side)
    // document.getElementById("CARD").className = "flashcard";
    // document.getElementById("CARD").classList += " " + side;
    console.log(currentIndex)
    console.log("Type: Random Cards")

  };

  const [flashcardType,setFlashcardType] = useState(showRandomCard)


  const showNextCardInList = () => {
    setSide("front")
    setCurrentIndex(((currentIndex+1) <= (flashcards.length - 1)) ? (currentIndex+1) : (flashcards.length-1) )
    console.log(currentIndex)
    console.log("Type: Cards in Order")
    console.log(side)
  }

  const showPrevCardInList = () => {
    setSide("front")
    console.log(side)
    setCurrentIndex(((currentIndex-1) >= (0)) ? currentIndex-1 : (0) )
    console.log(currentIndex)
  }
  const resetCardOrder = ()=>{
    setCurrentIndex(0)
    console.log("Cards reset to the begining")
    console.log(currentIndex)
  }

  

  const Handleflip = () =>{
      // alert("HIIII")
      // MyFlashcard.className = "test";
      console.log(side)
      setSide(side === "front" ? "back" : "front");
      // document.getElementById("CARD").className = "flashcard";
      // document.getElementById("CARD").classList += " " + side;
      console.log(side)
      // MyFlashcard.className = side;
  }
  
  const HandleRandomCards = () => {
    setFlashcardType(showRandomCard)
    document.getElementById("order").className = "myButton";
    document.getElementById("random").className+=" active";
    console.log(side)
  }

  const HandleOderedCards = () => {
    setFlashcardType("showNextCardInList")
    // document.getElementsByClassName("myButton").className = "myButton";
    document.getElementById("random").className = "myButton";
    document.getElementById("order").className+=" active";
    console.log(side)

  }

  return (
    <div className='App'>
      <div className="theme">
        {/* <img src="/src/assets/theme_icon.png" alt="Change Theme" className='theme_icon' onClick={handleThemeChange}/> */}
        <img src= {them} alt="Change Theme" className='theme_icon' onClick={handleThemeChange}/>
        
        <h4>Change Theme</h4>
      </div>
      <div className="navbar">
        
      </div>


      <div className="header">
        {/* <h4>Flashy</h4> */}
        <img src={flashyy} alt="Flashy" className='logo'/>
      </div>
      <div className="heading">
        <h1>Learn Japanese</h1>
        <div className="discription">
          <h3>Most Fun, Simple and Fastest way to learn Japanese through spaced repition!</h3>
        </div>
        {/* <h4>Number of Cards : {flashcards.length}</h4> */}
      </div>
      <div className="main">
        <button onClick={flashcardType === "showNextCardInList" ? showPrevCardInList : showRandomCard}>{"<-"}</button>
        <Card question={flashcards[currentIndex].question} answer={flashcards[currentIndex].answer} onFlip = {Handleflip} side = {side}/>
        {flashcardType === "showNextCardInList" ? <button   onClick={showNextCardInList}>{"->"}</button>  : <button  onClick={showRandomCard}>{"->"}</button>}
        {/* <button onClick={flashcardType === showNextCardInList ? showNextCardInList : showRandomCard}>{"->"}</button> */}
      </div>
      {/* <h4>Number of Cards : {flashcards.length}</h4> */}

      {flashcardType === "showNextCardInList" ? <h4>Current Card : {currentIndex+1}/{flashcards.length}</h4> : <h4>Number of Cards : {flashcards.length}</h4>}

      <div className="flashcardType">
        <button className='myButton active' id='random' onClick={HandleRandomCards}>Random Cards</button>
        <button className='myButton' id='order' onClick={HandleOderedCards}>Listed Cards</button>
        <button  onClick={resetCardOrder}>Reset Card Order</button>
      </div>
    </div>
  )
}

export default App
