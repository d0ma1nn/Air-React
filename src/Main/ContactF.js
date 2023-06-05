import React from "react";
import './main.scss'

const contact = () => {
    return (
      <div className="contact__fix">
        <div className="contact container" id="contact">
        <div className="contact__email">
            
         <form action="contact-form.php" method="post">
                    <h2>Kontaktiraj nas</h2>
         <div className="contact__email--template">
            <div className="ime"><p>Ime *</p></div>
            <div className="prezime" ><p>Prezime *</p></div>
            <div className="poruka"><p>Poruka *</p></div>
            <div className="input__ime">
              <input type="text" name="from" placeholder="Ime"/>
            </div>
            <div className="input_prezime">
              <input type="text" name = "prezime" placeholder="Prezime" />
            </div>
            <div className="email"><p>Email *</p></div>
            <div className="message">
              <textarea name="poruka" placeholder="Napiši poruku"></textarea>
            </div>
            <div className="email__input">
              <input type="text" name="email" placeholder="Unesi email"/>
            </div>
            <div className="telefon"><p>Telefon</p></div>
            <div className="telefon__input">
              <input type="text" placeholder="Ostavi broj telefona" name = "telefon"/>
            </div>
          </div>
                <input type="submit" value="Pošalji" className="blue__button subphp"/>
            <input type='hidden' name='submit'/>
        </form>
        </div>
        <div className="contact__info container">
          <h2>Kontakt informacije</h2>
          <div className="contact__informations">
            <div className="contact__information--left">
              <p>Email</p>
              <p>office@airlo.rs</p>
              <p>Adresa</p>
              <p>
                Aerodrom Vojka,<br />
                Nikole Pašića 26b, <br />Vojka 22313,<br />
                Serbia
              </p>
            </div>
            <div className="contact__information--right">
              <p>Telefon</p>
              <a href="tel:+381654378492"><p>+381654378492</p></a>
              <a href="tel:+381637556812"><p>+381637556812</p></a>
              <p>Radni sati</p>
              
                {/* <b style={{color: "#939394"}}>M - F:</b> <br>08:00 - 20:00</br>
                <b style={{color: 'red'}}>S - S:</b> <br>08:00 - 17:00</br> */}

              
          </div>
        </div>
        <div className="follow">
          <p>Zaprati nas</p>
        <div className="social">
          <div className="facebook"><a href="https://www.facebook.com/Air-Lo-105339478470840/?ref=py_c"><i className="fab fa-facebook fa-2x"></i></a></div>
          <div className="instagram"><a href="https://www.instagram.com/airlo_vojka/"><i className="fab fa-instagram fa-2x"></i></a></div>
          <div className="youtube"><a href="https://www.youtube.com/channel/UCfPyGwJj8dlU-IFgBZaDVBw"><i className="fab fa-youtube fa-2x"></i></a></div>
        </div>
      </div>
      </div></div>
      </div>
    )
};
export default contact