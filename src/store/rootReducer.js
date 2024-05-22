import { combineReducers } from 'redux';
import authReducer from './authSlice';
import portfolioReducer from './portfolioSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    portfolio: portfolioReducer,
});

export default rootReducer;
