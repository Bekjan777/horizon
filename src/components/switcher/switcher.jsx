import React, {useState} from 'react';
import c from "./switcher.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPricing} from "../../store/PaymentSlice.js";

const Switcher = () => {
    const currentPricing = useSelector(state => state.paymentSlice.currentPricing);
    const dispatch = useDispatch();
    const switchPricing = props => {
        // console.log(props)

        dispatch(setCurrentPricing(props));
        console.log(currentPricing, "каррент")

    }

    return (
        <div>
            <div className={c.choice_month_or_year}>
            <span onClick={() => switchPricing('Monthly')}
                  className={`${c.month} ${currentPricing === 'Monthly' && c.active_price}`}>Monthly</span>
                <span onClick={() => switchPricing('Yearly')}
                      className={`${c.year} ${currentPricing === 'Yearly' && c.active_price}`}>Yearly</span>
                <div
                    className={`${c.chosen_bgc} ${currentPricing === 'Yearly' ? c.yearly_chosen : c.monthly_chosen}`}></div>
            </div>
        </div>
    );
};

export default Switcher;