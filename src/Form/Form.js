import React from "react";
import {useState} from 'react'
import '../Main/main.scss';

const Form = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    return (
        <>
            <div className="contact">
                <div className="contact__form">
                    <h2>Kontaktiraj nas</h2>
                    <div className="contact__form--flex">
                         <div className="contact__form--flex--left">
                            <div className="contact__form--flex--left--ime">
                                <div>
                                    <h4>Ime *</h4>
                                    <input type="text" name="ime" placeholder="ime"/>
                                </div>
                                <div>
                                    <h4>Prezime *</h4>
                                    <input type="text" name="prezime" placeholder="prezime"/>
                                </div>
                            </div>
                        </div>
                        <div className="contact__form--flex--right">
                            <h4>Poruka *</h4>
                            <input className="poruka" type="text" name="poruka" placeholder="poruka"/>
                        </div>
                    </div>
                        <div className="email">
                                <h4>Email *</h4>
                                <input className="emailField" type="text" name="email" placeholder="email"/>
                        </div>
                        <div className="telefon">
                                <h4>Telefon</h4>
                                <input className="emailField" type="telefon" name="email" placeholder="telefon"/>
                        </div>
                </div>
                <div className="contact__information">
                    <h2>Kontakt informacije</h2>
                    <div className="contact__information--text">
                        <div className="contact__information--text--left">
                            <h4>Email</h4>
                            <p>Office@airlo.rs</p>
                            <h4>Adresa</h4>
                            <p>Aerodrom Vojka,<br></br>
                                Nikole Pašića 26b,<br></br>
                                Vojka 22313,<br></br>
                                Serbia </p>
                        </div>
                        <div className="contact__information--text--right">
                            <h4>Telefon</h4>
                            <p>+381654378492</p>
                            <p>+381637556812</p>
                            <h5>Radni sati</h5>
                            <p>
                            <b>M - F:</b><br></br>
                            08:00 - 20:00<br></br>
                            <b> S - S:</b><br></br>
                            08:00 - 17:00 <br></br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;