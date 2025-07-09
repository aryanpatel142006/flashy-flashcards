import React from "react";
import { use,useState } from "react";

const Card = (props) => {
    // const MyFlashcard = document.getElementById("CARD");

    const [side, setSide] = useState("back");

    const Handleflip = () =>{
        // alert("HIIII")
        // MyFlashcard.className = "test";
        setSide( side === "front" ? "back" : "front" );
        console.log(side)
        document.getElementById("CARD").className = "flashcard";
        document.getElementById("CARD").classList += " " + side;
        // MyFlashcard.className = side;
    }
    return(
        <div className="flashcard-container"> 
        <div className="flashcard" id="CARD" onClick={Handleflip} >
        {/* <div className="flashcard"  > */}
            <div className="card-front">{props.question}</div>
            <div className="card-back">{props.answer}</div>
        </div>
        </div>

    )
}

export default {Card, }
