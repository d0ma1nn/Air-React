import React from "react";
import {Link} from 'react-router-dom';
import {useState} from 'react'
import '../Main/main.scss';
import fbImg from '../img/fb.png'
import igImg from '../img/in.png'
import ytImg from '../img/yt.png'

const Form = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address');
        } else {
          alert('Okay');
        }
        if(name.length === 0) {
            alert('Niste upisali ime.');
        } else if (lastname.length === 0) {
            alert('Niste uneli prezime')
        } else if (email.length === 0) {
            alert('Niste upisali vaš email')
        } else if(message.length=== 0) {
            alert('Niste uneli poruku')
        } else {
            alert ('Poslali ste poruku')
        }

    }

    return (
        <>
            <div className="contact">
                <div className="contact__form">
                    <h2>Kontaktiraj nas</h2>
                    <form id="form">
                    <div className="contact__form--flex">
                         <div className="contact__form--flex--left">
                            <div className="contact__form--flex--left--ime">
                                <div className="column">
                                    <label>Ime *</label>
                                    <input type="text" name="name" placeholder="ime"/>
                                </div>
                                <div className="column">
                                    <label>Prezime *</label>
                                    <input type="text" name="lastname" placeholder="prezime"/>
                                </div>
                            </div>
                        </div>
                        <div className="contact__form--flex--right">
                            <h4>Poruka *</h4>
                            <input className="poruka" type="text" id="message" name="message" placeholder="poruka"/>
                        </div>
                    </div>
                        <div className="email column">
                                <label>Email *</label>
                                <input className="emailField" type="text" id="email" name="email" placeholder="email"/>
                        </div>
                        <div className="telefon column">
                                <label>Telefon</label>
                                <input className="emailField" type="text" id="phone" name="phone" placeholder="telefon"/>
                        </div>
                        <button type="submit" form='form'>Submit</button>
                        </form>

                </div>
                <div className="contact__information">
                    <h2>Kontakt informacije</h2>
                    <div className="contact__information--text">
                        <div className="contact__information--text--left">
                            <h3>Email</h3>
                            <p className="gap">Office@airlo.rs</p>
                            <h3>Adresa</h3>
                            <p>Aerodrom Vojka,<br></br>
                                Nikole Pašića 26b,<br></br>
                                Vojka 22313,<br></br>
                                Serbia </p>
                        </div>
                        <div className="contact__information--text--right">
                            <h3>Telefon</h3>
                            <p>+381654378492</p>
                            <p>+381637556812</p>
                            <h3 className="gap">Radni sati</h3>
                            <p>
                            <b>M - F:</b><br></br>
                            08:00 - 20:00<br></br>
                            <b> S - S:</b><br></br>
                            08:00 - 17:00 <br></br>
                            </p>
                        </div>
                    </div>
                    <div className="contact__information__social">
                        <h2>Zaprati nas</h2>
                        <div className="contact__information__social--icons">
                            <Link to="https://www.youtube.com/channel/UCfPyGwJj8dlU-IFgBZaDVBw">
                                <img src={fbImg} alt="example" className="iconSize"/>
                            </Link>
                            <Link to="https://www.youtube.com/channel/UCfPyGwJj8dlU-IFgBZaDVBw">
                                <img src={ytImg} alt="example" className="iconSize"/>
                            </Link>
                            <Link to="https://www.instagram.com/airlo_vojka/">
                                <img src={igImg} alt="example" className="iconSize"/>
                            </Link>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;