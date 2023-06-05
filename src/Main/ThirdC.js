import React from "react";
import "./main.scss"
import { Link } from "react-router-dom";

const thirdC = () => {
    return (
        <div>
            <div className="flexbox container">
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
                <tbody>
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
              </tbody>
            </table>
          </div>
          </div>
          <div className="fix">
          <a className="blue__button" href="/school.html#tabes">Saznaj više</a>
          </div>
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
                  <tbody>
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
                </tbody>
              </table>
              </div>
            </div>
            <div className="fix">
           <Link to ="ThirdC"> <a className="blue__button" href="/school.html#tabes">Saznaj više</a></Link>
            </div>
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
                    <tbody>
                  <tr>
                    <td><p>Timebuilding</p></td>
                    <td><p>1 sat</p></td>
                    <td><p>160 eur</p></td>
                </tr>
                </tbody>
              </table>
              </div>
                </div>
                <div className="fix">
                <a className="blue__button" href="/school.html#tabes">Saznaj više</a>
                </div>
              </div>
            </div>
        </div>

    )
}

export default thirdC