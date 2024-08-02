import React from 'react';
import c from './PeopleCV.module.sass'

const PeopleCV = ({quote, img, name}) => {
    return (
        <div className={c.card}>
            <div className={c.card__inner_top}>
                <p className={c.quote}>{quote}</p>
            </div>
            <div className={c.card__inner_down}>
                <div className={c.profile}>
                    <div className={c.avatar_container}>
                        <img src={img} alt="avatar" className={c.avatar}/>
                    </div>
                    <span className={c.name}>{name}</span>
                </div>
                <button className={c.btn_read_full_story}>Read Full Story</button>
            </div>
        </div>
    );
};

export default PeopleCV;