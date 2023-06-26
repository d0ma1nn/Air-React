import React from "react";
import SecondC from "./SecondC";
import ThirdC from "./ThirdC";
import FourthC from "./FourthC";
import FirstC from "./First";
// import ContactF from './ContactF'
import './main.scss'

const mainContent = () => {
    return (
        <>
            <FirstC></FirstC>
            <SecondC></SecondC>
            <ThirdC></ThirdC>
            <FourthC></FourthC>
            {/* <ContactF></ContactF> */}
        </>
        
    )
}
export default mainContent