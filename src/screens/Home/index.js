import React, { useEffect, } from 'react';
import { View, Text, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { portfolioActions } from '../../store/portfolioSlice';
import { styles } from './styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SummaryBottomSheet from '../../components/SummaryBottomSheet';
import UserHoldingFlatList from '../../components/UserHoldingFlatList';
import Loader from '../../components/Loader';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {

    const portfolioDataResponse = useSelector(state => state.portfolio.portfolioDataResponse);
    const portfolioDataResponseStatus = useSelector(state => state.portfolio.portfolioDataResponseStatus);
    const summaryData = useSelector(state => state.portfolio.summaryData);
    const userHolding = useSelector(state => state.portfolio.userHolding);

    const loading = useSelector(state => state.portfolio.loading);
    const error = useSelector(state => state.portfolio.error);

    const dispatch = useDispatch();


    useEffect(() => {
        //console.log('\n\nHome screen');
        fetchPortfolioData()
    }, []);

    useEffect(() => {
        //console.log('\n\nportfolioDataResponseStatus : ', portfolioDataResponseStatus);

        if (portfolioDataResponseStatus === 'SUCCESS') {
            //Handle extra effects or logic on API success
        }
        else if (portfolioDataResponseStatus === 'ERROR') {
            //Handle extra effects or logic on API error
        }
        else if (portfolioDataResponseStatus === 'FAIL') {
            //Handle extra effects like Opening ErrorModal on API fail / Axios errors
        }
    }, [portfolioDataResponseStatus])

    const fetchPortfolioData = () => {
        dispatch(portfolioActions.getPortfolioData());
    }

    return (
        <GestureHandlerRootView>

            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>
                    {loading === true &&
                        <Loader />
                    }
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Upstox Holding</Text>
                    </View>

                    <UserHoldingFlatList
                        data={userHolding}
                        fetchPortfolioData={fetchPortfolioData}
                        refreshing={loading}
                    />

                    <SummaryBottomSheet
                        summaryData={summaryData}
                        portfolioDataResponseStatus={portfolioDataResponseStatus}
                    />

                </View>
            </SafeAreaView>
        </GestureHandlerRootView>

    );
};


export default Home;
