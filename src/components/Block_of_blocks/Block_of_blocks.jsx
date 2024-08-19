import React from 'react';
import c from './Block_of_blocks.module.sass'
import Block from "../Block/Block.jsx";

const BlockOfBlocks = ({nameOfBlock, info, blocks}) => {

    // console.log(nameOfBlock, info, blocks);
    // const block_1 = blocks[0]
    // console.log(blocks, "BLOCKS_OF_BLOCKS")
    // if (blocks) {
    //     console.log(blocks[0]);
    // }else{
    //     console.log("не ебу")
    // }

    // console.log(block_1, "bock_1")
    return (
        <div className={c.block_of_blocks}>
            <div className={c.block_of_blocks__inner}>
                <div className={c.block_of_blocks__inner__top}>
                    <h2 className={c.title}>{nameOfBlock}</h2>
                    <p className={c.info}>{info}</p>
                </div>
                <div className={c.block_of_blocks__inner__down}>
                    <Block {...blocks[0]}/>
                    <Block {...blocks[1]}/>
                    <Block {...blocks[2]}/>
                    <Block {...blocks[3]}/>
                </div>
            </div>
        </div>
    );
};

export default BlockOfBlocks;