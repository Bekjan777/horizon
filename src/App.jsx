import React, { useState } from 'react'

import './App.css'
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";

function App() {

  return (
    <>
        <Header/>
        <HomePage />
    </>
  )
}

export default App
