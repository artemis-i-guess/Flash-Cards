import React from "react";
import './Flip.css'
import Card from "./Card";
import {CSSTransition} from "react-transition-group";
import { useState } from "react";

function Flip(){

    const [side, setSide] = useState(true);
    return(
        <div className="flippable-card-container">
            <CSSTransition
                in={side}
                timeout={300}
                classNames='flip'
            >
               <Card onClick={() => {
                  setSide((v) => !v);
               }}/>
            </CSSTransition>
            
        </div>
    );
}


export default Flip;