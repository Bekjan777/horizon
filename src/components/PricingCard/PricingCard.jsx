import React from 'react';
import c from './PricingCard.module.sass'
import pos from '../../assets/HomePage/positive.svg'
import neg from '../../assets/HomePage/negative.svg'

const PricingCard = ({number, per_what, plan, list}) => {




    return (
        <div className={c.card}>
            <div className={c.card__inner}>
                <div className={c.plan}>{`${plan} Plan`}</div>
                <div className={c.price}>
                    <span className={c.number}>
                        {`$${number}`}
                    </span>
                    <span className={c.per_what}>
                        {`/${per_what}`}
                    </span>
                </div>
                <div className={c.features}>
                    <div className={c.features__inner}>
                        <p className={c.available_features}>Available Features</p>
                        <ul className={c.list_of_features}>
                            <li className={c.feature_one}>
                                <div className={list[0] === 1 ? c.true_check : c.false_check}>
                                    <img className={c.checkbox} src={list[0] === 1 ? pos : neg} alt="checkbox"/>
                                </div>
                                <p className={c.name_of_feature}>Access to selected free courses.</p>
                            </li>
                            <li className={c.feature_one}>
                                <div className={list[1] === 1 ? c.true_check : c.false_check}>
                                    <img className={c.checkbox} src={list[1] === 1 ? pos : neg} alt="checkbox"/>
                                </div>
                                <p className={c.name_of_feature}>Limited course materials and resources.</p>
                            </li>
                            <li className={c.feature_one}>
                                <div className={list[2] === 1 ? c.true_check : c.false_check}>
                                    <img className={c.checkbox} src={list[2] === 1 ? pos : neg} alt="checkbox"/>
                                </div>
                                <p className={c.name_of_feature}>Basic community support.</p>
                            </li>
                            <li className={c.feature_one}>
                                <div className={list[3] === 1 ? c.true_check : c.false_check}>
                                    <img className={c.checkbox} src={list[3] === 1 ? pos : neg} alt="checkbox"/>
                                </div>
                                <p className={c.name_of_feature}>No certification upon completion.</p>
                            </li>
                            <li className={c.feature_one}>
                                <div className={list[4] === 1 ? c.true_check : c.false_check}>
                                    <img className={c.checkbox} src={list[4] === 1 ? pos : neg} alt="checkbox"/>
                                </div>
                                <p className={c.name_of_feature}>Ad-supported platform.</p>
                            </li>
                            <li className={c.feature_one}>
                                <div className={list[5] === 1 ? c.true_check : c.false_check}>
                                    <img className={c.checkbox} src={list[5] === 1 ? pos : neg} alt="checkbox"/>
                                </div>
                                <p className={c.name_of_feature}>Access to exclusive Pro Plan community forums.</p>
                            </li>
                            <li className={c.feature_one}>
                                <div className={list[6] === 1 ? c.true_check : c.false_check}>
                                    <img className={c.checkbox} src={list[6] === 1 ? pos : neg} alt="checkbox"/>
                                </div>
                                <p className={c.name_of_feature}>Early access to new courses and updates.</p>
                            </li>
                        </ul>
                    </div>
                    <button className={c.get_started}>Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default PricingCard;