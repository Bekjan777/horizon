import React from 'react';
import c from "./formOfLoginAndSignUp.module.sass"
import SwiperRatings from "../swiperRatings/SwiperRatings.jsx";

const FormOfLoginAndSignUp = () => {
    return (

        <div className={c.form_page}>
            <div className="container">
                <div className={c.form_page__inner}>
                    <div className={c.leftside_info}>
                        <div className={c.title_and_info}>
                            <h2 className={c.heading}>
                                Students Testimonials
                            </h2>
                            <p className={c.info}>
                                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                            </p>
                        </div>
                        <div className={c.slider_of_ratings}>
                            <SwiperRatings/>
                        </div>
                    </div>
                    <div className={c.form}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormOfLoginAndSignUp;