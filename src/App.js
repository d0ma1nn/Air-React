import './App.css';
import Navi from './Navigator/Navi'
import Main from './Main/Main'
import "./Variables/Var.scss"
import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import ThirdC from './Main/ThirdC';
// import FourthC from './Main/FourthC';
import FAQ from './Faq/Faq'
import Float from './Float/Float'

function App() {
  return (
    <>
      {/* <Navi></Navi>
      <Main></Main> */}
      <Navi/>
      {/* <Routes>
        <Route path='/' element={<Main />} />
        
        <Route path='ThirdC' element={<ThirdC />} />
        <Route path="/" element={<FourthC />} />
      </Routes> */}
      <Main />
      <FAQ />
      <Float />
     </>
  );
}

export default App;
