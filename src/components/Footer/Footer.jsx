import React from 'react';
import c from './Footer.module.sass'
import logo from '../../assets/header/Logo.svg'
import letter from '../../assets/footer/letter.svg'
import call from '../../assets/footer/call.svg'
import geolocation from '../../assets/footer/geolocation.svg'

import facebook from '../../assets/footer/facebook.svg'
import tweater from '../../assets/footer/tweater.svg'
import linkedin from '../../assets/footer/linkedin.svg'

const Footer = () => {
    return (
        <footer className={c.footer}>
            <div className="container">
                <div className={c.footer__inner}>
                    <div className={c.footer__inner__top}>
                        <div className={c.left_side_footer}>
                            <div className={c.logo_container}><img src={logo} alt="logo" className={c.logo}/>
                            </div>
                            <ul className={c.list_left_side}>
                                <li className={c.li_left_side}>
                                    <a href="" className={c.a_left_side}>
                                        <div className={c.icon_footer_container}>
                                            <img src={letter} alt="letter" className={c.icon_footer}/>
                                        </div>
                                        <span className={c.text_of_list_left_side}>
                                            hello@skillbridge.com
                                        </span>
                                    </a>
                                </li>
                                <li className={c.li_left_side}>
                                    <a href="" className={c.a_left_side}>
                                        <div className={c.icon_footer_container}>
                                            <img src={call} alt="call" className={c.icon_footer}/>
                                        </div>
                                        <span className={c.text_of_list_left_side}>
                                        +91 91813 23 2309
                                        </span>
                                    </a>
                                </li>
                                <li className={c.li_left_side}>
                                    <a href="" className={c.a_left_side}>
                                        <div className={c.icon_footer_container}>
                                            <img src={geolocation} alt="geolocation" className={c.icon_footer}/>
                                        </div>
                                        <span className={c.text_of_list_left_side}>
                                        Somewhere in the World
                                    </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={c.right_side_footer}>
                            <div className={c.home_column}>
                                <h3 className={c.heading_h3}>Home</h3>
                                <ul className={c.list_right_side}>
                                    <li className={c.li_right_side}><a href="" className={c.link_right_side}>
                                        <p className={c.text_of_list_right_side}>Our Courses</p>
                                    </a></li>
                                    <li className={c.li_right_side}><a href="" className={c.link_right_side}>
                                        <p className={c.text_of_list_right_side}>Our Testimonials</p>
                                    </a></li>
                                    <li className={c.li_right_side}><a href="" className={c.link_right_side}>
                                        <p className={c.text_of_list_right_side}>Our Pricing</p>
                                    </a></li>
                                </ul>
                            </div>
                            <div className={c.about_column}>
                                <h3 className={c.heading_h3}>About Us</h3>
                                <ul className={c.list_right_side}>
                                    <li className={c.li_right_side}><a href="" className={c.link_right_side}>
                                        <p className={c.text_of_list_right_side}>Company</p>
                                    </a></li>
                                    <li className={c.li_right_side}><a href="" className={c.link_right_side}>
                                        <p className={c.text_of_list_right_side}>Achievements</p>
                                    </a></li>
                                    <li className={c.li_right_side}><a href="" className={c.link_right_side}>
                                        <p className={c.text_of_list_right_side}>Our Goals</p>
                                    </a></li>
                                </ul>
                            </div>
                            <div className={c.social_column}>
                                <h3 className={c.heading_h3}>Social Profiles</h3>
                                <div className={c.icons_socials}>
                                    <a href="" className={c.link_right_side}>

                                        <div className={c.social_media_container}><img src={facebook} alt="facebook"
                                                                                       className={c.image_of_social_media}/>
                                        </div>
                                    </a>
                                    <a href="" className={c.link_right_side}>
                                        <div className={c.social_media_container}><img src={tweater} alt="tweater"
                                                                                       className={c.image_of_social_media}/>
                                        </div>
                                    </a>
                                    <a href="" className={c.link_right_side}>
                                        <div className={c.social_media_container}><img src={linkedin} alt="linkedin"
                                                                                       className={c.image_of_social_media}/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={c.footer__inner__down}>© 2023 Skillbridge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;