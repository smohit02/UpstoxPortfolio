import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { portfolioActions } from '.';
import Config from 'react-native-config';

function* fetchPortfolioDataSaga(action) {
    try {
        // //console.log('inside getPortfolioData saga');

        const response = yield call(axios.get, Config.USER_PORTFOLIO_API);

        // //console.log('response :', response.data);

        if (response?.status === 200) {
            //console.log('response :', response.data);

            yield put(portfolioActions.setPortfolioResponse({
                data: response?.data,
                status: 'SUCCESS'
            }));
        }

        else {
            //Custom API data error scenarios
            yield put(portfolioActions.setPortfolioResponse({
                data: response.data,
                status: 'ERROR'
            }));
        }
    }
    catch (error) {
        //Axios network errors
        //console.log('error :', error);

        yield put(portfolioActions.setError(error))
        yield put(portfolioActions.setPortfolioResponse({
            data: error,
            status: 'FAIL'
        }));
    }
}

export function* watchFetchPortfolio() {
    yield takeLatest(portfolioActions.getPortfolioData, fetchPortfolioDataSaga);
}
