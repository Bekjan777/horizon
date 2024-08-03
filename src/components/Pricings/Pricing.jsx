import React from 'react';
import c from './Pricing.module.sass'
import PricingCard from "../PricingCard/PricingCard.jsx";

const Pricing = () => {
    return (
        <div className={c.pricing}>
            <PricingCard
                number={0}
                per_what={`month`}
                plan={`Free`}
                list={[1, 1, 1, 1, 1, 0, 0]}
            />
            <PricingCard
                number={79}
                per_what={`month`}
                plan={`Pro`}
                list={[1, 1, 1, 1, 1, 1, 1]}
            />
        </div>
    );
};

export default Pricing;