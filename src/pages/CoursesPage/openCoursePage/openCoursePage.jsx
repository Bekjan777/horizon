import React, {useEffect, useRef, useState} from 'react';
import c from './openCoursePage.module.sass'
import open from '../../../assets/HomePage/play_button.svg'
import share from '../../../assets/CoursesPage/share.svg'
import {viewsConverter} from "../../../functions/viewsConverter.jsx";
import {toDate} from "../../../functions/toDate.jsx";
import Comment from "../../../components/comment/Comment.jsx";
import LittleVideo from "../../../components/LittleVideo/LittleVideo.jsx";
import {useParams} from "react-router-dom";
import {video} from "../../../data/video.js";
import timeAgo from "../../../functions/timeAgo.jsx";

const OpenCoursePage = () => {

    const {videoId} = useParams()
    console.log(videoId)
    useEffect(()=>{

    },[])
    const { code, title, date , likes, isLiked, desc, avatar, views, listOfComents, listOfVideos} = video
    // console.log(listOfVideos)
    const [show, setShow] = useState(false)

    const lengthText = useRef(null)

    const [likesNew, setLikesNew] = useState(likes)
    const [isFavorite, setIsFavorite] = useState(isLiked)

    const toAddFavorite = () => {
        console.log("added")
        setLikesNew(prev=>++prev)

    }
    const toRemoveFavorite = () => {
        console.log("removed")
        setLikesNew(prev=>--prev)
    }

    // useEffect(() => {
    //     console.log(lengthText.current.style.webkitLineClamp)
    //
    // }, []);

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={c.open_course}>
            <div className="container">
                <div className={c.open_course__inner}>
                    <div className={c.video}>
                        {
                            isOpen ? (
                                <iframe className={c.iframe}
                                        src={`https://www.youtube.com/embed/${code}?autoplay=1`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen></iframe>
                            ) : (
                                <>
                                    <img className={c.play_btn} onClick={()=>setIsOpen(prev=>!prev)} src={open} alt="play-btn"/>
                                    <img className={c.video_preview} src={`https://img.youtube.com/vi/${code}/maxresdefault.jpg`} alt="bgc_of_video"/>
                                </>
                            )
                        }
                    </div>
                    <div className={c.title_and_btns}>
                        <h3 className={c.heading_h3}>
                            {title}
                        </h3>
                        <div className={c.btns}>
                            <div className={c.share_container}>
                                <img src={share} className={c.share_image} alt="to-share"/>
                            </div>
                            <div className={c.like_container}>
                                <div className={c.like_container_image}>
                                    {/*<img src={like} alt="to-like" />*/}
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none"
                                         onClick={()=>{
                                             isFavorite ? toRemoveFavorite() : toAddFavorite();
                                             setIsFavorite(prev=>!prev)
                                         }}
                                         className={`${c.like_image} ${isFavorite && c.liked}`}
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25.657 43.3813L25.6484 43.3813L25.6397 43.3813C25.5558 43.3818 25.4727 43.3658 25.3951 43.334C25.3182 43.3027 25.2482 43.2565 25.1891 43.1983C25.1885 43.1977 25.1879 43.1971 25.1873 43.1966L8.59101 26.5789C8.59019 26.5781 8.58937 26.5773 8.58856 26.5764C6.78503 24.7528 5.77344 22.2913 5.77344 19.7264C5.77344 17.1619 6.78465 14.7009 8.58754 12.8774C10.4053 11.0666 12.8666 10.0498 15.4325 10.0498C17.9999 10.0498 20.4625 11.0677 22.2805 12.8804C22.2807 12.8806 22.2809 12.8807 22.281 12.8809L24.5877 15.1876L25.6484 16.2482L26.709 15.1876L29.0157 12.8809C29.0159 12.8807 29.016 12.8806 29.0162 12.8804C30.8343 11.0677 33.2969 10.0498 35.8642 10.0498C38.4302 10.0498 40.8916 11.0666 42.7093 12.8775C44.5121 14.7011 45.5233 17.162 45.5233 19.7264C45.5233 22.2914 44.5117 24.7529 42.7081 26.5765C42.7073 26.5773 42.7065 26.5781 42.7057 26.5789L26.1095 43.1966C26.1089 43.1971 26.1083 43.1977 26.1077 43.1983C26.0485 43.2565 25.9785 43.3027 25.9017 43.334C25.824 43.3658 25.7409 43.3818 25.657 43.3813Z"
                                            stroke="#262626" strokeWidth="3"/>
                                    </svg>

                                </div>
                                <span className={c.number_like}>
                                    {likesNew}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={c.open_course__under}>
                        <div className={c.left_side_info}>
                            <section className={c.description_section}>
                                <div className={c.extra_info}>
                                    <p className={c.date}>
                                        {toDate(date)}
                                    </p>
                                    <div className={c.dot}></div>
                                    <p className={c.date}>
                                        {viewsConverter(views)} views
                                    </p>
                                </div>
                                <p ref={lengthText}  className={`${c.description} ${show && c.show_fully}`}>
                                    {desc}
                                </p>
                                <p onClick={() => {
                                    setShow(prev => !prev)
                                }} className={c.show_more}>
                                    {show ? `Show less` : `Show more...`}
                                </p>
                            </section>
                            <section className={c.comment_section}>
                                <div className={c.to_comment}>
                                    <div className={c.avatar_container}>
                                        <img src={avatar} alt="" className={c.avatar}/>
                                    </div>
                                    <textarea placeholder={`Enter comment...`}
                                                  className={c.input_field_comment_section}/>
                                    <button type="button" className={c.to_leave_message}>
                                    Comment
                                    </button>

                                </div>

                                <div className={c.comments}>

                                    {/*<Comment avatar={listOfComents[0]['avatar']} date={listOfComents[0]['date']} name={listOfComents[0]['name']} information={listOfComents[0]['information']}></Comment>*/}

                                    {
                                        listOfComents.map((comment, i) => (
                                            <Comment
                                                key={i}
                                                avatar={comment.avatar}
                                                information={comment.information}
                                                name={comment.name}
                                                date={comment.date}
                                            />
                                        ))
                                    }
                                </div>
                            </section>

                        </div>
                        <div className={c.right_side_video}>
                            <div className={c.right_side_video__inner}>
                                {
                                    listOfVideos.map((video, i) => (
                                        <LittleVideo key={i} preview={video.preview} date={video.date} views={video.views} desc={video.desc} title={video.title} />
                                    ))
                                }
                                <LittleVideo date={listOfVideos[0].date} desc={listOfVideos[0].desc} preview={listOfVideos[0].preview} views={listOfVideos[0].views} title={listOfVideos[0].title}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OpenCoursePage;