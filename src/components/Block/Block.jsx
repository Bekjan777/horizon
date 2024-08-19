import React from 'react';
import c from './Block.module.sass'
const Block = ({pict, name, info}) => {
    // console.log(pict, name, info, "BLOCKS")
    return (
        <div className={c.block}>
            <div className={c.block__inner}>
                <div className={c.img_container}>
                    <img src={pict} alt="pict" className={c.img_container__image}/>
                </div>
                <h3 className={c.name}>{name}</h3>
                <p className={c.info}>{info}</p>
            </div>

        </div>
    );
};

export default Block;