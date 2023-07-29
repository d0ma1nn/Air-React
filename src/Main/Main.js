import React from "react";
import SecondC from "./SecondC";
import ThirdC from "./ThirdC";
import FourthC from "./FourthC";
import FirstC from "./First";
import Form from "../Components/Form";
import Navi from "../Navigator/Navi"
import './main.scss'

const mainContent = () => {
    return (
        <>
        <Navi></Navi>
            <FirstC></FirstC>
            <SecondC></SecondC>
            <ThirdC></ThirdC>
            <FourthC></FourthC>
            <Form />
        </>
        
    )
}
export default mainContent