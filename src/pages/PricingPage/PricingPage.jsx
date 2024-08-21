import React from 'react';
import c from './PricingPage.module.sass'
import TitlePage from "../../components/titlePage/titlePage.jsx";
import {pricing} from "../../data/data.js";
import Switcher from "../../components/switcher/switcher.jsx";
import Pricing from "../../components/Pricings/Pricing.jsx";

const PricingPage = () => {
    return (

        <div className={c.pricing_page}>
            <TitlePage {...pricing[0]}/>
            <div className="container">
                <div className={c.pricing_page__inner}>
                    <Switcher/>
                    <Pricing/>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;