import React from "react";
import './NavStyle.scss'
import {Link, Route, Routes} from 'react-router-dom'
import School from "../School/School";


const navBar = () => {
    return (
      <div>
        <header className="header">
        <div className="navmenu container">
          <div className="logo">
            <Link to="/"><div className="logo__content"></div></Link>
          </div>
          <div className="nav hidden">
            {/* <Routes>
            <Route path="School" element={<School />}></Route>
            </Routes> */}
            <Link to = "School" className="nav__item">Škola letenja</Link>
            <Link to = "First" className="nav__item">Naša flota</Link>
            <Link to = "Main" className="nav__item">O nama</Link>
            <Link to = "ThirdC" className="nav__item">FAQ</Link>
          </div>
          <div></div>
           <div className="nav__contact"><p>Kontaktiraj nas</p></div>
        </div>
        </header>
      </div>
    )
}

export default navBar