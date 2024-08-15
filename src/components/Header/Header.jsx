import React from 'react';
import c from './Header.module.sass'
import logo from '../../assets/header/Logo.svg'
import burger from '../../assets/header/burger.svg'
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import {IconContext} from "react-icons";
import './cancel.sass'
const Header = () => {

    const [isActive, setIsActive] = React.useState(false)

    const onClickHamburger = () => {
        setIsActive(prev => !prev)
    }
    const [currentPage, setCurrentPage] = React.useState('Home')
    const toSwitchPage = page => {
        setCurrentPage(page)
        console.log(page)
    }
    return (


        <div className={c.header}>
            <div className={`${c.list} ${isActive ? c.list__active : ''}`}>
                <div className={c.list_inner}>
                    <IconContext.Provider  value={{ className: "cancel-react-cross"}}>
                        <RxCross2 onClick={onClickHamburger}/>
                    </IconContext.Provider>
                    <ul className={c.list__ul}>
                        <Link to={`/`} className={c.list__ul__li}>Home</Link>
                        <Link to={`/courses`} className={c.list__ul__li}>Courses</Link>
                        <Link to={`/about`} className={c.list__ul__li}>About Us</Link>
                        <Link to={`/pricing`} className={c.list__ul__li}>Pricing</Link>
                        <Link to={`/contact`} className={c.list__ul__li}>Contact</Link>
                    </ul>
                </div>
            </div>
            <div className={c.underline}>
                <div className="container">
                    <div className={c.header__wrapper}>
                        <div className={c.left_side_header}>
                            <div className={c.logo_wrapper}>
                                <img className={c.logo} src={logo} alt="logo"/>
                            </div>
                            <ul className={c.navbar}>
                                <li onClick={() => toSwitchPage('Home')} className={c.navbar__li}>
                                    <Link to="/"
                                          className={`${c.navbar__li__a} ${currentPage === 'Home' && c.is_active}`}>
                                        Home
                                    </Link>
                                </li>
                                <li onClick={() => toSwitchPage('Courses')} className={`${c.navbar__li}`}>
                                    <Link to="/courses"
                                          className={`${c.navbar__li__a} ${currentPage === 'Courses' && c.is_active}`}>
                                        Courses
                                    </Link>
                                </li>
                                <li onClick={() => toSwitchPage('AboutUs')} className={`${c.navbar__li}`}>
                                    <Link to="/about"
                                          className={`${c.navbar__li__a} ${currentPage === 'AboutUs' && c.is_active}`}>
                                        About Us
                                    </Link>
                                </li>
                                <li onClick={() => toSwitchPage('Pricing')} className={`${c.navbar__li}`}>
                                    <Link to="/pricing"
                                          className={`${c.navbar__li__a} ${currentPage === 'Pricing' && c.is_active}`}>
                                        Pricing
                                    </Link>
                                </li>
                                <li onClick={() => toSwitchPage('Contact')} className={`${c.navbar__li}`}>
                                    <Link to="/contact"
                                          className={`${c.navbar__li__a} ${currentPage === 'Contact' && c.is_active}`}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={c.right_side_header}>
                            <span className={c.sign_up}>Sign Up</span>
                            <button className={c.login}>
                                Login
                            </button>
                            <div onClick={onClickHamburger} className={`${c.burger_wrapper} ${isActive && c.hidden_bur}`} >
                                <img src={burger} alt="burger" className={`${c.burger} ${isActive && c.hidden_bur}`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;