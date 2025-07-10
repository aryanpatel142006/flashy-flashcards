import React from "react";
import { use,useState } from "react";

const Card = (props) => {
    // const MyFlashcard = document.getElementById("CARD");

    return(
        <div className="flashcard-container"> 
        <div className={"flashcard " + props.side} id="CARD" onClick={props.onFlip} >
        {/* <div className="flashcard"  > */}
            <div className="card-front">{props.question}</div>
            <div className="card-back">{props.answer}</div>
        </div>
        </div>

    )
}

export default Card
