import React, {useState, useEffect } from "react";
import './NavStyle.scss'
import {Link} from 'react-router-dom'
import School from "../School/School";
import About from '../About/About'
import Float from '../Float/Float'
import Faq from '../Faq/Faq'


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
            <ul>
              <CustomLink to ="/School" className="nav__item">Škola letenja</CustomLink>
              <CustomLink to ="/Float" className="nav__item">Naša flota</CustomLink>
              <CustomLink to ="/About" className="nav__item">O nama</CustomLink>
              <CustomLink to ="/Faq" className="nav__item">FAQ</CustomLink>
            </ul>
          </div>
          <div></div>
          <Link to="#form" className="nav__contact" onClick={handleClick}>Kontaktiraj nas</Link>
        </div>
        </header>
      </div>
    )
}

function CustomLink({to ,children, ...props}) {
  const path = window.location.pathname;
  console.log(path)
  return (
      <Link to={to} {...props}>
        {children}
      </Link>

  )
}
export default NavBar