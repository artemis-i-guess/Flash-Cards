import React from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Flip from "../Card/Flip";
import './Carousel.css'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";


function Carousel() {

    
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        const slider = document.querySelector('.product-container');
        const width = slider.offsetWidth;
        slider.scrollLeft -= width;
    }

    const btnpressnext = () => {
        const slider = document.querySelector('.product-container');
        const width = slider.offsetWidth;
        slider.scrollLeft += width;
    }
    
    return(
        <div className="product-carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={btnpressprev}/> 
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={btnpressnext}/> 
            <div className="product-container">
                <Flip />
                <Flip />
                <Flip />
                <Flip />
                <Flip />
                <Flip />
                <Flip />
                <Flip />
                <Flip />
            </div>

        </div>
    );

   

   
}


export default Carousel;