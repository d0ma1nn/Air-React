import React from "react";
import Navi from '../Navigator/Navi';
import '../Main/main.scss';

// aviRight.onmouseenter = function () {
//     aviLeft.style.transform = "scale(0.7)";
//     aviRight.style.transform = "scale(1.1)";
//     aviLeft.style.opacity = 0.4;
//     levih.style.opacity = 0;
//   };
//   aviRight.onmouseleave = function () {
//     aviRight.style.transform = "scale(1)";
//     aviLeft.style.transform = "scale(1)";
//     aviLeft.style.opacity = 1;
//     levih.style.opacity = 1;
//   };
//   aviLeft.onmouseenter = function () {
//     aviRight.style.transform = "scale(0.7)";
//     aviLeft.style.transform = "scale(1.1)";
//     aviRight.style.opacity = 0.4;
//     desnih.style.opacity = 0;
//   };
//   aviLeft.onmouseleave = function () {
//     aviLeft.style.transform = "scale(1)";
//     aviRight.style.transform = "scale(1)";
//     aviRight.style.opacity = 1;
//     desnih.style.opacity = 1;
//   };
  
//   const imgOne = document.getElementById("slImg__1");
//   const imgTwo = document.getElementById("slImg__2");
//   const imgThree = document.getElementById("slImg__3");
//   const imgFour = document.getElementById("slImg__4");
//   const mainImg = document.getElementById("maine");
  
//   imgOne.addEventListener("click", function () {
//     mainImg.style.backgroundImage = "url(/img/velis.png)";
   
//   });
//   imgTwo.addEventListener("click", function () {
//     mainImg.style.backgroundImage = "url(/img/IMG_6470.png)";
   
//   });
  
//   imgThree.addEventListener("click", function () {
//     mainImg.style.backgroundImage = "url(/img/cockp.png)";
    
//   });
  
//   imgFour.addEventListener("click", function () {
//     mainImg.style.backgroundImage = "url(/img/air_mech.png)";
//     setTimeout(function () {
//       mainImg.style.backgroundImage = "url(/img/slika_3.png)";
//     }, 4000);
//   });
  
const float = () => {
    return (
        <>
            <Navi />
            <div className="top__content">
                <div className="top__content--left">
                    <h1>Naša flota</h1>
                    <p>Našu flotu čine avioni nove generacije opremljeni savremenom opremom i padobranom za ceo avion.</p>
                </div>
                <div className="top__content--right"></div>
            </div>
            <div class="flota">
        <div class="container">
        <div class="av_sect">
        <h4 id="levih">Virus SW</h4></div>
        <div class="av_sect"><h4 class="contact_nav" id="desnih">VELIS club</h4></div></div>
      </div>

      <div class="slide__show">
        <div class="container">
        <div class="slika__glavna" id="maine"></div>
        <div class="red__slika">
          <div class="flex_img1 img_size" id="slImg__1"></div>
          <div class="flex_img2 img_size" id="slImg__2"></div>
          <div class="flex_img3 img_size" id="slImg__3"></div>
          <div class="flex_img4 img_size" id="slImg__4"></div>

        </div>
        <div class="text">
          <h2>O avionima</h2>
          <p>
            Avione odlikuje efikasnost, bezbednost, jednostavnost, komfornost i ekonomičnost. Opremljeni su savremenom opremom, BPRS sistemom, auto pilotom i glass cockpit-om koji omogućavaju studentima okruženje kao u putničkom avionu. Pored osnovne obuke mogu da se koriste za vuču jedrilica, NVFR i A-UPRT.
          </p>
        </div>
      </div></div>
        </>
    )
}

export default float;