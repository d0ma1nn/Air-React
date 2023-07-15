import React, { useState } from 'react';
import Navi from '../Navigator/Navi';
import '../Main/main.scss';
import Form from "./Form";


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
  
const bar1 = document.getElementsByClassName('slideshow__middle--1')
console.log(bar1)


const Float = () => {
    // const [imageSrc, setImageSrc] = useState('./img/IMG_6470.png')
    const [currentImage, setCurrentImage] = useState('./img/IMG_6470.png');

    const handleClick = (image) => {
      setCurrentImage(image);
    };
  
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
            <div className="avioni">
                <div className="avioni__levi">
                    <div className="avioni__levi--slika"></div>
                    <h2>Virus SW</h2>
                </div>
                <div className="avioni__desni">
                    <div className="avioni__desni--slika"></div>
                    <h2>VELIS Club</h2>
                </div>
            </div>
                <div className="slideshow">
                    <div className="slideshow__left">
                        {/* <img src={imageSrc} alt="Displayed Image" /> */}
                        <div className="image-display">
                                {currentImage && <img src={currentImage} alt="Selected Image" />}</div>
                    </div>
                    <div className="slideshow__middle">
                        <img src="./img/1.png" onClick={() => handleClick("image1.jpg")} alt="Thumbnail 1" />
                        <img src="./img/3   .png" onClick={() => handleClick("image2.jpg")} alt="Thumbnail 2" />
                        <img src="./img/IMG_6470.png" onClick={() => handleClick("image3.jpg")} alt="Thumbnail 3" />
                    </div>
                    <div className="slideshow__right">
                        <h2>O avionima</h2>
                        <p>Avione odlikuje efikasnost, bezbednost, jednostavnost, komfornost i ekonomičnost. Opremljeni su savremenom opremom, BPRS sistemom, auto pilotom i glass cockpit-om koji omogućavaju studentima okruženje kao u putničkom avionu. Pored osnovne obuke mogu da se koriste za vuču jedrilica, NVFR i A-UPRT. </p>
                    </div>
                </div>
                <Form />
        </>
    )
}

export default Float;
