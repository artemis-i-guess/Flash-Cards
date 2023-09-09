import React from "react";
import { useState } from "react";
import './Add.css';

function Add(){

   const [cards, setCards] = useState([]);

    function handleClick(){

        const newCard = "here"
        setCards(prevState => [...prevState, newCard])
    }
        
    const inpArea = cards.map(card => 
    (<div className="card">
      <input type="text" id="question" name="question" placeholder="Question"/>
      <input type="text" id="answer" name="answer" placeholder="Answer..."/>
    </div>)
    )
    
    return (
        <div className="addBg">
         <div className="addButton">
            <div className="bfill">
           <button className="press"onClick={handleClick}>+</button>
           <p>Add card</p>
           </div>
         </div>

         <div className="area">
           {inpArea}
         </div>

         
        </div>
    );
}

export default Add;
