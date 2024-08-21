import React, {useState} from 'react';
import Header from "../../components/Header/Header.jsx";
import c from './HomePage.module.sass'
import energy from '../../assets/HomePage/true_energy.svg'
import lines from '../../assets/HomePage/lines.svg'
import play from '../../assets/HomePage/play_button.svg'
import container from '../../assets/HomePage/Container.png'
import CourseCard from "../../components/course card/CourseCard.jsx";
import PeopleCV from "../../components/PeopleCV/PeopleCV.jsx";
import Sara_L from '../../assets/HomePage/Sara_L.png'
// import PricingCard from "../../components/PricingCard/PricingCard.jsx";
import Pricing from "../../components/Pricings/Pricing.jsx";
import Switcher from "../../components/switcher/switcher.jsx";
// import Jason_M from '../../assets/HomePage/Jason_M.png'
// import Emily_R from '../../assets/HomePage/Emily_R.png'
// import Michael_K from '../../assets/HomePage/Michael_K.png'

const HomePage = () => {

    const [isActive, setIsActive] = React.useState(false)
    const openVideo = () => {
        setIsActive(true)
    }

    return (
        <>


            <div className={c.main}>
                <div className="container">

                    <div className={c.main__title}>
                        <div className={c.main__title__heading}>
                            <img src={lines} alt="lines" className={c.lines}/>
                            <div className={c.energy_photo}>
                                <img className={c.en_logo} src={energy} alt="energy"/>
                            </div>
                            <p className={c.paragraph_in_heading}><span className={c.span}>Unlock</span> Your Creative
                                Potential</p>
                        </div>
                        <p className={c.paragraph_in_low_heading}>with Online Design and Development Courses.</p>
                        <p className={c.paragraph_in_mega_low_heading}>Learn from Industry Experts and Enhance Your
                            Skills.</p>
                    </div>
                    <div className={c.main__btns}>
                        <button className={c.btn_yellow}>Explore Courses</button>
                        <button className={c.btn_gray}>View Pricing</button>
                    </div>
                </div>
                <div className={c.main__welcome_video}>
                    <div className="container">
                        <div className={`${c.main__welcome_video__inner} ${!isActive ? c.non_active : ''}`}>
                            {
                                isActive ? <iframe className={c.iframe}
                                                   src="https://www.youtube.com/embed/KCJ4pdavu-g?autoplay=1"
                                                   title="YouTube video player" frameBorder="0"
                                                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                   referrerPolicy="strict-origin-when-cross-origin"
                                                   allowFullScreen></iframe> :
                                    <img onClick={openVideo} className={c.play} src={play} alt="play"/>

                            }


                        </div>
                    </div>
                </div>
                <div className={c.main__our_courses}>
                    <div className="container">
                        <div className={c.main__our_courses__inner_top}>
                            <h2 className={c.heading_h2}>
                                Our Courses
                            </h2>
                            <div className={c.main__our_courses__inner_top__inner_container}>
                                <p className={c.paragraph_under_heading}>Lorem ipsum dolor sit amet consectetur. Tempus
                                    tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
                                    cum eget habitasse in velit fringilla feugiat senectus in.</p>
                                <button className={c.button_view_all}>View All</button>
                            </div>
                        </div>
                        <div className={c.main__our_courses__inner_down}>
                            <CourseCard
                                heading={`Web Design Fundamentals`}
                                img={container}
                                author={`By John Smith`}
                                desc={`Learn the fundamentals of web design, including HTML, CSS, and responsive 
                                design principles. Develop the skills to create visually appealing and user-friendly 
                                websites.`}
                                dur={`4 Weeks`}
                                level={`Beginner`}
                            />
                            <CourseCard
                                heading={`Web Design Fundamentals`}
                                img={container}
                                author={`By John Smith`}
                                desc={`Learn the fundamentals of web design, including HTML, CSS, and responsive 
                                design principles. Develop the skills to create visually appealing and user-friendly 
                                websites.`}
                                dur={`4 Weeks`}
                                level={`Beginner`}
                            />
                            <CourseCard
                                heading={`Web Design Fundamentals`}
                                img={container}
                                author={`By John Smith`}
                                desc={`Learn the fundamentals of web design, including HTML, CSS, and responsive 
                                design principles. Develop the skills to create visually appealing and user-friendly 
                                websites.`}
                                dur={`4 Weeks`}
                                level={`Beginner`}
                            />
                            <CourseCard
                                heading={`Web Design Fundamentals`}
                                img={container}
                                author={`By John Smith`}
                                desc={`Learn the fundamentals of web design, including HTML, CSS, and responsive 
                                design principles. Develop the skills to create visually appealing and user-friendly 
                                websites.`}
                                dur={`4 Weeks`}
                                level={`Beginner`}
                            />
                            <CourseCard
                                heading={`Web Design Fundamentals`}
                                img={container}
                                author={`By John Smith`}
                                desc={`Learn the fundamentals of web design, including HTML, CSS, and responsive 
                                design principles. Develop the skills to create visually appealing and user-friendly 
                                websites.`}
                                dur={`4 Weeks`}
                                level={`Beginner`}
                            />
                            <CourseCard
                                heading={`Web Design Fundamentals`}
                                img={container}
                                author={`By John Smith`}
                                desc={`Learn the fundamentals of web design, including HTML, CSS, and responsive 
                                design principles. Develop the skills to create visually appealing and user-friendly 
                                websites.`}
                                dur={`4 Weeks`}
                                level={`Beginner`}
                            />

                        </div>
                    </div>
                </div>
                <div className={c.main__our_testimonials}>
                    <div className="container">
                        <div className={c.main__our_testimonials__inner_top}>
                            <h2 className={c.heading_h2}>
                                Our Testimonials
                            </h2>
                            <div className={c.main__our_testimonials__inner_top__inner_container}>
                                <p className={c.paragraph_under_heading}>Lorem ipsum dolor sit amet consectetur. Tempus
                                    tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
                                    cum eget habitasse in velit fringilla feugiat senectus in.</p>
                                <button className={c.button_view_all}>View All</button>
                            </div>
                        </div>
                        <div className={c.main__our_testimonials__inner_down}>
                            <PeopleCV
                                img={Sara_L}
                                name={`Sara L`}
                                quote={`The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!`}
                            />
                            <PeopleCV
                                img={Sara_L}
                                name={`Sara L`}
                                quote={`The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!`}
                            />
                            <PeopleCV
                                img={Sara_L}
                                name={`Sara L`}
                                quote={`The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!`}
                            />
                            <PeopleCV
                                img={Sara_L}
                                name={`Sara L`}
                                quote={`The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!`}
                            />
                        </div>
                    </div>
                </div>
                <div className={c.main__our_pricing}>
                    <div className="container">
                        <div className={c.main__our_pricing__inner_top}>
                            <h2 className={c.heading_h2}>
                                Our Pricing
                            </h2>
                            <div className={c.main__our_pricing__inner_top__inner_container}>
                                <p className={c.paragraph_under_heading}>Lorem ipsum dolor sit amet consectetur. Tempus
                                    tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
                                    cum eget habitasse in velit fringilla feugiat senectus in.</p>
                                <Switcher/>
                            </div>
                        </div>
                        <div className={c.main__our_pricing__inner_down}>
                            <Pricing/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomePage;