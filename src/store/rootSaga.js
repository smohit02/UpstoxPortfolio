// sagas/index.js
import { all, fork } from 'redux-saga/effects';
import { watchFetchPortfolio } from './portfolioSlice/saga';


export default function* rootSaga() {
    yield all([
        fork(watchFetchPortfolio),
    ]);
}
