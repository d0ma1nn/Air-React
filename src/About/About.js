import React from "react";
import Navi from '../Navigator/Navi';
import '../Main/main.scss';
import Form from "../Form/Form";

const about = ( ) => {
    return (
        <>
            <Navi />
            <div className="about__top">
                <div className="about__top--left">
                    <h2>O Nama</h2>
                    <p>Air Lo je škola letenja osnovana 2015. godine i zabeležila je ogroman uspeh kako u Srbiji tako i u Inostranstvu.</p>
                </div>
                <div className="about__top--right"></div>
            </div>
            <div className="about__middle">
                <div className="about__middle--left">
                    <div className="about__middle--left--image"></div>
                    <div className="about__middle--left--text">
                        <h3>Lokacija</h3>
                        <p>Naše sedište se nalazi u Vojki, u blizini autoputa E-75 i Aerodroma Nikola Tesla. Upravo zato nam je omogućen brz i lak pristup značajnim lokacijama </p>
                    </div>
                </div>
                <div className="about__middle--center">
                    <div className="about__middle--center--image"></div>
                    <div className="about__middle--center--text">
                        <h3>Način rada</h3>
                        <p>Air Lo škola letenja je jedna od vodećih porodičnih škola koja se bavi početnom obukom pilota za sticanje PPL/LAPL dozvole. Permanentno ulaganje u usavršavanje i tehnologiju čini nas jednim od lidera u ovoj delatnosti.</p>
                    </div>
                </div>
                <div className="about__middle-right">
                     <div className="about__middle--right--image"></div>
                    <div className="about__middle--right--text">
                        <h3>Obećanja</h3>
                        <p>Od osnivanja bezbednost je stavljena na prvo mesto, pa se u školi koriste isključivo novi vazduhoplovi, koji su opremljeni raketnim padobranom. Ističemo se novom tehnologijom novim avionima i glass cockpit-om. </p>
                    </div>
                </div>
            </div>
                <div className="about__bottom">
                    <div className="about__bottom--left"></div>
                    <div className="about__bottom--right">
                        <h3>Naša poruka</h3>
                        <p>Ponosni smo što možemo da pružimo više tipova obuke, u zavisnosti da li je letenje hobi ili posao. Iskustvo znanje i obrazovanje je ono što nas ističe. Plan i program obuke je usklađen sa najvišim standardima koji su zahtevani u Evropi, pa tako i naši studenti imaju priliku da se upoznaju i sa letenjem u drugim državama.</p>
                    </div>
                </div>
                <Form />
        </>
    )
}

export default about