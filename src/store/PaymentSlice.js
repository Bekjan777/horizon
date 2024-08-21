import {createSlice} from "@reduxjs/toolkit";


const paymnetSlice = createSlice({
        name: 'PaymnetSlice',
        initialState: {
            currentPricing: 'Monthly'
        },
        reducers: {
            setCurrentPricing: (state, action) => {
                state.currentPricing = action.payload
            }
        }
    }
)

export const { setCurrentPricing } = paymnetSlice.actions;
export default paymnetSlice.reducer;