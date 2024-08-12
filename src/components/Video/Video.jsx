import React from 'react';
import c from './Video.module.sass'
import dots from '../../assets/CoursesPage/dots.svg'

import {viewsConverter} from "../../functions/viewsConverter.jsx";
import timeAgo from "../../functions/timeAgo.jsx";

const Video = ({preview, heading, views, date}) => {




    return (
        <div className={c.video}>
            <div className={c.video_pict_container}>
                <img src={preview} alt="video" className={c.video_pict}/>
            </div>
            <div className={c.information_of_video}>
                <div className={c.heading}>
                    <h3 className={c.heading_of_video}>
                        {heading}
                    </h3>
                    <div className={c.views_and_date}>
                        <span className={c.views}>
                            {`${viewsConverter(views)} views`}
                        </span>
                        <span className={c.date}>
                            {timeAgo(date)}
                        </span>
                    </div>
                </div>
                <div className={c.more_btn}>
                    <img src={dots} alt="more_btn" className={c.more_btn_image}/>
                </div>
            </div>
        </div>
    );
};

export default Video;