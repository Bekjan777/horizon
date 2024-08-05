import React, { useState } from 'react'

import './App.css'
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <>
        <Header/>
        <HomePage />
        <Footer/>
    </>
  )
}

export default App
