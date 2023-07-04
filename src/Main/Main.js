import React from "react";
import SecondC from "./SecondC";
import ThirdC from "./ThirdC";
import FourthC from "./FourthC";
import FirstC from "./First";
import Form from "../Form/Form";
import Navi from "../Navigator/Navi"
// import ContactF from './ContactF'
import './main.scss'

const mainContent = () => {
    return (
        <>
        <Navi></Navi>
            <FirstC></FirstC>
            <SecondC></SecondC>
            <ThirdC></ThirdC>
            <FourthC></FourthC>
            {/* <ContactF></ContactF> */}
            <Form />
        </>
        
    )
}
export default mainContent