import React from 'react';
import c from './titlePage.module.sass'

const TitlePage = ({title, info}) => {
    return (

        <div className={c.about}>
            <div className="container">
                <div className={c.about__inner}>
                    <div className={c.about__inner__platform}>
                        <h1 className={c.title_of_page}>{title}</h1>
                        <p className={c.about_text}>{info}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitlePage;