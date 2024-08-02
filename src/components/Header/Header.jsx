import React from 'react';
import c from './Header.module.sass'
import logo from '../../assets/header/Logo.svg'
import burger from '../../assets/header/burger.svg'

const Header = () => {

    const [isActive, setIsActive] = React.useState(false)

    const onClickHamburger = () => {
        setIsActive(prev => !prev)
    }


    return (

        <div className="container">
            <div className={c.header}>
                <div className={c.header__wrapper}>
                    <div className={c.left_side_header}>
                        <div className={c.logo_wrapper}>
                            <img className={c.logo} src={logo} alt="logo"/>
                        </div>
                        <ul className={c.navbar}>
                            <li className={c.navbar__li}>
                                <a href="" className={`${c.navbar__li__a} ${c.is_active}`}>
                                    Home
                                </a>
                            </li>
                            <li className={c.navbar__li}>
                                <a href="" className={c.navbar__li__a}>
                                    Courses
                                </a>
                            </li>
                            <li className={c.navbar__li}>
                                <a href="" className={c.navbar__li__a}>
                                    About Us
                                </a>
                            </li>
                            <li className={c.navbar__li}>
                                <a href="" className={c.navbar__li__a}>
                                    Pricing
                                </a>
                            </li>
                            <li className={c.navbar__li}>
                                <a href="" className={c.navbar__li__a}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={c.right_side_header}>
                        <span className={c.sign_up}>Sign Up</span>
                        <button className={c.login}>
                            Login
                        </button>
                        <div onClick={onClickHamburger} className={c.burger_wrapper}>
                            <img src={burger} alt="burger" className={c.burger}/>
                        </div>
                    </div>
                </div>
                <div className={`${c.list} ${isActive ? c.list__active : ''}`}>
                    <ul className={c.list__ul}>
                        <li className={c.list__ul__li}>Home</li>
                        <li className={c.list__ul__li}>Courses</li>
                        <li className={c.list__ul__li}>About Us</li>
                        <li className={c.list__ul__li}>Pricing</li>
                        <li className={c.list__ul__li}>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;