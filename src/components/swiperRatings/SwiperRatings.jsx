import React from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { rates } from "../../data/data.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import PeopleCV from "../PeopleCV/PeopleCV.jsx";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; // Добавьте, если используете Scrollbar

const SwiperRatings = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="swiper"
            loop={true}
            // navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {
                rates.map((item, index) => (
                    <SwiperSlide key={index}>
                        <PeopleCV quote={item.quote} name={item.name} img={item.avatar} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default SwiperRatings;