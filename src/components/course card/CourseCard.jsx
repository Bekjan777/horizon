import React from 'react';
import c from './CourseCard.module.sass'
const CourseCard = ({img, dur, level, author, heading, desc}) => {
    return (
        <div className={c.card}>
            <div className={c.card__inner}>
                <div className={c.card__inner_top}>
                    <div className={c.img_container}>
                        <img src={img} alt="course_card" className={c.img}/>
                    </div>
                    <div className={c.tags_and_author}>
                        <div className={c.tags}>
                            <div className={c.duration}>{dur}</div>
                            <div className={c.level}>{level}</div>
                        </div>
                        <span className={c.author}>{author}</span>
                    </div>
                    <div className={c.main_text}>
                        <h3 className={c.heading_of_course}>{heading}</h3>
                        <p className={c.description}>{desc}</p>
                    </div>
                </div>
                <button className={c.btn_to_get_it}>{`Get it Now`}</button>
            </div>
        </div>
    );
};

export default CourseCard;