import { createSlice } from '@reduxjs/toolkit';
import { calculateValues } from '../../utils';

const initialState = {

    portfolioDataResponse: null,
    portfolioDataResponseStatus: null,

    userHolding: [],
    summaryData: {
        currentValueTotal: 0,
        totalInvestment: 0,
        totalPNL: 0,
        todaysPNL: 0
    },

    loading: false,
    error: null,
}


const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        getPortfolioData: (state, action) => {
            state.loading = true
            state.userHolding = []
            state.summaryData = {
                currentValueTotal: 0,
                totalInvestment: 0,
                totalPNL: 0,
                todaysPNL: 0
            }
            state.portfolioDataResponse = null
            state.portfolioDataResponseStatus = 'PENDING'
            state.error = null
        },

        setPortfolioResponse: (state, action) => {
            //console.log('\ninside setPortfolioResponse :', action.payload);
            state.portfolioDataResponse = action.payload.data
            state.portfolioDataResponseStatus = action.payload.status

            let responseData = action.payload.data
            let userHoldingList = [...responseData?.data?.userHolding]
            let summary = null

            if (action.payload.status === 'SUCCESS') {
                summary = calculateValues(userHoldingList)
                //console.log('\n\nSummary result :', summary);
                state.summaryData = { ...summary }
                state.userHolding = userHoldingList
            }

            state.loading = false
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setError: (state, action) => {
            state.error = action.payload
        }
    },
});

export const portfolioActions = portfolioSlice.actions;

export default portfolioSlice.reducer;
