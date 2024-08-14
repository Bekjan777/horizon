import React from 'react';
import c from './LittleVideo.module.sass'
import {toDate} from "../../functions/toDate.jsx";
import {viewsConverter} from "../../functions/viewsConverter.jsx";
import video from "../Video/Video.jsx";
import {Link} from "react-router-dom";

const LittleVideo = () => {

    const {id, title, desc, date, views, preview} = video

    return (
        <Link to={`/courses/${id}`}>
            <div className={c.video}>
                <div className={c.video__inner}>
                    <div className={c.preview}>
                        <img src={preview} alt="preview" className={c.preview_pict}/>
                    </div>
                    <div className={c.right_side_info}>
                        <h2 className={c.title}>
                            {title}
                        </h2>
                        <p className={c.description}>
                            {desc}
                        </p>
                        <div className={c.extra}>
                            <span className={c.date}>{toDate(date)}</span>
                            <div className={c.dot}></div>
                            <span className={c.views}>{viewsConverter(views)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LittleVideo;