import React from "react";
import "./main.scss"

const thirdC = () => {
    return (
        <div>
            <div className="flexbox">
        <div className="flexbox__item">
          <h2>PPL (A)</h2>
          <p className="parGrey">Dozvola privatnog pilota aviona</p>
          <h3>8,000.00 eur</h3>
          <div className="gridbox">
            <div className="gridbox__top">
              <p className="detalji">Detalji kursa</p>
            </div>
            <div className="gridbox__table">
              <table>
                <tr>
                  <td><p>Teorijska obuka</p></td>
                  <td><p>6-12 nedelja</p></td>
                  <td><p>800 eur</p></td>
                </tr>
                <tr>
                  <td><p>Praktična obuka</p></td>
                  <td><p>45 sati</p></td>
                  <td><p>7200 eur</p></td>
              </tr>
            </table>
          </div>
          </div>
          <a className="blue__button" href="/school.html#tabes">Saznaj više</a>
        </div>
          <div className="flexbox__item">
            <h2>LAPL (A)</h2>
            <p className="parGrey">Dozvola pilota lakog aviona</p>
            <h3>5,600.00 eur</h3>
            <div className="gridbox">
              <div className="gridbox__top">
                <p className="detalji">Detalji kursa</p>
              </div>
              <div className="gridbox__table">
                <table>
                  <tr>
                    <td><p>Teorijska obuka</p></td>
                    <td><p>6-12 nedelja</p></td>
                    <td><p>800 eur</p></td>
                  </tr>
                  <tr>
                    <td><p>Praktična obuka</p></td>
                    <td><p>30 sati</p></td>
                    <td><p>4800 eur</p></td>
                </tr>
              </table>
              </div>
            </div>
            <a className="blue__button" href="/school.html#tabes">Saznaj više</a>
          </div>
            <div className="flexbox__item">
              <h2>Timebuilding</h2>
              <p className="parGrey">Dozvola za pilota lakog aviona</p>
              <h3>160.00 eur</h3>
             
              <div className="gridbox">
                <div className="gridbox__top">
                  <p className="detalji">Detalji kursa</p>
                </div>
                <div className="gridbox__table">
                  <table>
                  <tr>
                    <td><p>Timebuilding</p></td>
                    <td><p>1 sat</p></td>
                    <td><p>160 eur</p></td>
                </tr>
              </table>
              </div>
                </div>

                <a className="blue__button" href="/school.html#tabes">Saznaj više</a>
              </div>
            </div>
        </div>

    )
}

export default thirdC