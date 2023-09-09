import React from "react";
import './Body.css';

function Body(){
    return(
        <div className="body">
            <div className="side1">
                  <div class="container">
                    <div className="box">
                        <p className="qa">Question</p>
                    </div>
                    <div className="box overlay">
                        <p className="qa">Answer</p>
                    </div>
                  </div>
            </div>

            <div className="side2">
                <div>
                    <p className="a">
                    Your go-to for efficient revisions. Whether it's SDE prep, SAT exams, 
                    or college SEM tests, master your learning in minimal time. 
                    Stay organized with our streamlined approach.
                     </p>
                </div>
                    

                <div className="s2b">
                    <p className="b">Discover efficient learning with our website. Flashcards are concise learning
                         tools containing information on one side and its corresponding details or 
                         answers on the other. Add flash cards with tags. Filter and memorize cards. 
                    </p>

                    <p className="c">Flip, assess, progress.</p>
                    
                    <p className="b">Track correct answers. Enhance your study routine today.</p>
                </div>
            </div>
        </div>
    );

}

export default Body;