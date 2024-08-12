import React from 'react';
import c from './Comment.module.sass'
import timeAgo from "../../functions/timeAgo.jsx";
const Comment = ({avatar, name, date, information}) => {
    return (
        <div className={c.comment}>
            <div className={c.avatar}>
                <img src={avatar} alt="avatar" className={c.avatar_image}/>
            </div>
            <div className={c.text}>
                <div className={c.personal}>
                    <span className={c.name}>
                        {name}
                    </span>
                    <span className={c.time_ago}>
                        {timeAgo(date)}
                    </span>
                </div>
                <p className={c.information}>
                    {information}
                </p>
            </div>
        </div>
    );
};

export default Comment;