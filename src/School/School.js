import React from "react";
import Navi from '../Navigator/Navi';
import '../Main/main.scss';

const school = () => {
    return (
        <>
            <div className="top__content">
                <div className="top__content--left">
                    <h1>Škola letenja za vas</h1>
                    <p>Air Lo škola letenja je jedna od vodećih porodičnih škola u Srbiji koja se bavi početnom obukom pilota za sticanje PPL/LAPL dozvole.</p>
                    <a href="#contact">Kontaktirajte nas</a>
                </div>
                <div className="top__content--right"></div>
            </div>
        </>
    )
}

export default school;