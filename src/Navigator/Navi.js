import React from "react";
import './NavStyle.scss'

const navBar = () => {
    return (
      <div>
        <header className="header">
        <div className="navmenu container">
          <div className="logo">
            <div className="logo__content"></div>
          </div>
          <div className="nav hidden">
            <div className="nav__item">Škola letenja</div>
            <div className="nav__item">Naša flota</div>
            <div className="nav__item">O nama</div>
            <div className="nav__item">FAQ</div>
          </div>
          <div></div>
           <div className="nav__contact"><p>Kontaktiraj nas</p></div>
        </div>
        </header>
      </div>
    )
}

export default navBar