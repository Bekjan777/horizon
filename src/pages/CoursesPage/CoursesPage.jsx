import React from 'react';
import c from './CoursesPage.module.sass'
import Video from "../../components/Video/Video.jsx";

const CoursesPage = () => {
    return (
        <div className={c.courses_page}>
            <div className={c.courses_page__upper}>
                <div className="container">
                    <div className={c.courses_page__inner}>
                        <div className={c.courses_page__inner__information}>
                            <h1 className={c.heading_h1}>Online Courses on Design and Development</h1>
                            <p className={c.description}>Welcome to our online course page, where you can enhance your
                                skills in design and development. Choose from our carefully curated selection of 10
                                courses designed to provide you with comprehensive knowledge and practical experience.
                                Explore the courses below and find the perfect fit for your learning journey.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={c.courses_page__lower}>
                <div className="container">
                    <div className={c.courses_page__lower__inner}>
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                        <Video
                            heading={`Джим Керри - Знаменитая Речь Взорвавшая Интернет! Мотивация Меняющая Сознание!`}
                            date={`07.08.2024`}
                            preview={`https://i.ytimg.com/vi/CDgrpn1fAmg/maxresdefault.jpg`}
                            views={12034}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoursesPage;