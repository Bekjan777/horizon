import React from 'react';
import c from './Pricing.module.sass'
import PricingCard from "../PricingCard/PricingCard.jsx";
import {useSelector} from "react-redux";

const Pricing = () => {
    const currentPricing = useSelector(state => state.paymentSlice.currentPricing);

    return (
        <div className={`${c.pricing} ${currentPricing === 'Yearly' && c.yearly }`}>

            {
                currentPricing === "Monthly" ? (
                    <>
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
                    </>
                ) : (

                    <>
                        <PricingCard
                            number={1000}
                            per_what={`year`}
                            plan={`Pro`}
                            list={[1, 1, 1, 1, 1, 1, 1]}
                        />
                    </>
                )
            }

        </div>
    );
};

export default Pricing;