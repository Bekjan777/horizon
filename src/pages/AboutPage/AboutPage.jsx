import React from 'react';
import c from './AboutPage.module.sass'
import TitlePage from "../../components/titlePage/titlePage.jsx";
import BlockOfBlocks from "../../components/Block_of_blocks/Block_of_blocks.jsx";
import {aboutUs} from '../../data/data.js'

const AboutPage = () => {



    return (

        <>
            <TitlePage
                title={`About Skillbridge`}
                info={`Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.`}
            />

            <div className={c.about}>
                <div className="container">
                    <div className={c.about__inner}>
                        <BlockOfBlocks {...aboutUs[1]}/>
                        <BlockOfBlocks {...aboutUs[2]}/>
                        {/*<BlockOfBlocks/>*/}
                    </div>
                </div>
            </div>
        </>

    );
};

export default AboutPage;