import './App.css';
import Navi from './Navigator/Navi'
// import {  Routes, Route, Link } from 'react-router-dom';
import Main from './Main/Main'
import "./Variables/Var.scss"
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Faq from './Faq/Faq'
import Float from './Float/Float'
import About from './About/About'
import School from './School/School'

function App() {
  return (
    <>
    <Navi></Navi>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/School' element={<School />} />
      <Route path='/About' element={<About />} />
      <Route path='/Float' element={<Float />} />
      <Route path='/Faq' element={<Faq />} />
    </Routes>
    </>
  );
}

export default App;
