import React, {useState, useEffect } from "react";
import './NavStyle.scss'
import {Link, Route, Routes} from 'react-router-dom'
import School from "../School/School";
import About from '../About/About'

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 100) {
//     navAni.classList.add("sticky");
//     navAni.style.margin="0, auto";
//   } else {
//     navAni.classList.remove("sticky");
//   }
// });

const NavBar = () => {

    // const [colorChange, setColorchange] = useState(false);
    // const changeNavbarColor = () => {
    //     if (window.scrollY >= 100) {
    //         setColorchange(true);
    //     }
    //     else {
    //         setColorchange(false);
    //     }
    // };
    // window.addEventListener('scroll', changeNavbarColor);
    // function Header2() {
    //   const [header, setHeader] = useState("header")
      
    //   const listenScrollEvent = (event) => {
    //     if (window.scrollY < 73) {
    //       return setHeader("header")
    //     } else if (window.scrollY > 70) {
    //       return setHeader("header2")
    //     } 
    //   }

    //   useEffect(() => {
    //     window.addEventListener('scroll', listenScrollEvent);
      
    //     return () =>
    //       window.removeEventListener('scroll', listenScrollEvent);
    //   }, []);
    // const navAni = document.getElementsByClassName('navbar active');

    const [navbar, setNavbar] = useState(true)
    const changeBackground = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 1) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })

    //
    const handleClick = event => {
      console.log(event.currentTarget.id);

    };

    return (
      <div>
        <header className={navbar ? "navbar active" : "navbar"} id="header">
        <div className="navmenu container">
          <div className="logo">
            <Link to="/"><div className="logo__content"></div></Link>
          </div>
          <div className="nav hidden">
            <Routes>
              <Route path = "School" element={<School />} className="nav__item">Škola letenja</Route>
              <Route path = "Float" element={<About />} className="nav__item">Naša flota</Route>
              <Route path = "About" className="nav__item">O nama</Route>
              <Route path = "Faq" className="nav__item">FAQ</Route>
            </Routes>
          </div>
          <div></div>
          <Link to="#form" className="nav__contact" onClick={handleClick}>Kontaktiraj nas</Link>
        </div>
        </header>
      </div>
    )
}

export default NavBar