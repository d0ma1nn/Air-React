import React from "react";
import './main.scss'

const contact = () => {
    return (
      <div className="contact__fix">
        <div class="contact container" id="contact">
        <div class="contact__email">
            
         <form action="contact-form.php" method="post">
                    <h2>Kontaktiraj nas</h2>
         <div class="contact__email--template">
            <div class="ime"><p>Ime *</p></div>
            <div class="prezime" ><p>Prezime *</p></div>
            <div class="poruka"><p>Poruka *</p></div>
            <div class="input__ime">
              <input type="text" name="from" placeholder="Ime"/>
            </div>
            <div class="input_prezime">
              <input type="text" name = "prezime" placeholder="Prezime" />
            </div>
            <div class="email"><p>Email *</p></div>
            <div class="message">
              <textarea name="poruka" placeholder="Napiši poruku"></textarea>
            </div>
            <div class="email__input">
              <input type="text" name="email" placeholder="Unesi email"/>
            </div>
            <div class="telefon"><p>Telefon</p></div>
            <div class="telefon__input">
              <input type="text" placeholder="Ostavi broj telefona" name = "telefon"/>
            </div>
          </div>
                <input type="submit" value="Pošalji" className="blue__button subphp"/>
            <input type='hidden' name='submit'/>
        </form>
        </div>
        <div class="contact__info container">
          <h2>Kontakt informacije</h2>
          <div class="contact__informations">
            <div class="contact__information--left">
              <p>Email</p>
              <p>office@airlo.rs</p>
              <p>Adresa</p>
              <p>
                Aerodrom Vojka,<br />
                Nikole Pašića 26b, <br />Vojka 22313,<br />
                Serbia
              </p>
            </div>
            <div class="contact__information--right">
              <p>Telefon</p>
              <a href="tel:+381654378492"><p>+381654378492</p></a>
              <a href="tel:+381637556812"><p>+381637556812</p></a>
              <p>Radni sati</p>
              
                {/* <b style={{color: "#939394"}}>M - F:</b> <br>08:00 - 20:00</br>
                <b style={{color: 'red'}}>S - S:</b> <br>08:00 - 17:00</br> */}

              
          </div>
        </div>
        <div class="follow">
          <p>Zaprati nas</p>
        <div class="social">
          <div class="facebook"><a href="https://www.facebook.com/Air-Lo-105339478470840/?ref=py_c"><i class="fab fa-facebook fa-2x"></i></a></div>
          <div class="instagram"><a href="https://www.instagram.com/airlo_vojka/"><i class="fab fa-instagram fa-2x"></i></a></div>
          <div class="youtube"><a href="https://www.youtube.com/channel/UCfPyGwJj8dlU-IFgBZaDVBw"><i class="fab fa-youtube fa-2x"></i></a></div>
        </div>
      </div>
      </div></div>
      </div>
    )
};
export default contact