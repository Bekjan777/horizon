import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import './App.sass'
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CoursesPage from './pages/CoursesPage/CoursesPage.jsx'
function App() {

  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage/>} />
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}

export default App
