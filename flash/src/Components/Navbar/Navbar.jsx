import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){

    const isLog = false;

    if(isLog === false)
    {return(
        <div className="navbar">
            <div className="title">
             FLASH CARDS
            </div>

            <div className="log">
                <div className="home">
                    <Link to="/"><p>HOME</p></Link>
                  
                   
                </div>

                <div>
                    <Link to="/add"> <p>ADD</p></Link>
                   
                </div>

                <div>
                   <Link to="/revise"><p>REVISE</p></Link>
                </div>
                
                <div className="login">
                  <p>LOG IN</p>
                </div>
            </div>
        </div>
    );}

    else{
        return(
            <div className="navbar">
                    <div className="title">
                      FLASH CARDS
                    </div>

                    <div className="log">
                        <div className="home">
                           <p>HOME</p>
                        </div>
                
                        <div className="login">
                           <p>REVISE</p>
                        </div>

                       <div>
                          <p>ADD CARDS</p>
                        </div>

                        <div>
                              <div>
                                <p>Username</p>
                                <p>email</p>
                              </div>

                              <div>

                              </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Navbar;