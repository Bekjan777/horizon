import React, {useEffect} from 'react';
import c from './Video.module.sass'
import dots from '../../assets/CoursesPage/dots.svg'

import {viewsConverter} from "../../functions/viewsConverter.jsx";
import timeAgo from "../../functions/timeAgo.jsx";
import {Link} from "react-router-dom";
import {video} from "../../data/video.js";

const Video = () => {

    useEffect(() => {
        // ...
    }, []);
    const {id, code, title, views, date} = video

    console.log(video)
    return (
        <Link className={c.link} to={`/courses/${id}`}>

            <div className={c.video}>
                <div className={c.video_pict_container}>
                    <img src={`https://img.youtube.com/vi/${code}/maxresdefault.jpg`} alt="video" className={c.video_pict}/>
                </div>
                <div className={c.information_of_video}>
                    <div className={c.heading}>
                        <h3 className={c.heading_of_video}>
                            {title}
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
        </Link>
    );
};

export default Video;