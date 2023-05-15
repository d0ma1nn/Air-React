import React from "react";
import SecondC from "./SecondC";
import ThirdC from "./ThirdC";

import './main.scss'

const mainContent = () => {
    return (
        <div className="main container">
            <div className="heading">
                <div className="heading__text">
                    <h1>Škola letenja za vas</h1>
                    <p>Air Lo škola letenja je jedna od vodećih porodičnih škola u Srbiji
                    koja se bavi početnom obukom pilota za sticanje PPL/LAPL dozvole.</p>
                    <a href="#contact">Kontaktirajte nas</a>
                </div>
                <div className="heading__image">
                
                </div>
            </div>
            <SecondC></SecondC>
            <ThirdC></ThirdC>
        </div>
        
    )
}
export default mainContent