import React from "react";
import "./main.scss"

const secondC = () => {
    return (
        <div>
            <div className="flexbox1 container">
                <div className="flexbox1__item">
                <h2>Naša lokacija</h2>
                <p>Nalazimo se nedaleko od Beograda na aerodromu Vojka. Posetite nas i
                upoznajte članove AirLo</p>
                <a className = "blue__button" href="https://www.google.com/maps/place/Air+Lo/@44.9358779,20.1663491,17z/data=!3m1!4b1!4m5!3m4!1s0x475a59fdcfeffd11:0x42f366a4b98e39dc!8m2!3d44.9358779!4d20.1685431">Pronađi nas</a>
                </div>
                <div class="flexbox1__item">
                <h2>Novosti</h2>
                <p>Zaprati naš instagram gde postavljamo sve novosti i ponude.</p>
                <a className = "blue__button" href="https://www.instagram.com/airlo_vojka/">Zaprati nas</a>
                </div>
                <div class="flexbox1__item">
                <h2>Uskoro</h2>
                </div>
            </div>
        </div>
    )
}

export default secondC;