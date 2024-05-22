import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './HomeStack';

import { useSelector } from 'react-redux';
import withAuth from './protectedRouteHOC';
import { useEffect } from 'react';


const Stack = createStackNavigator();

const RootStack = (props) => {

    useEffect(() => {
        //console.log('\n\nRootStack')
    }, [])

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const ProtectedHomeStack = withAuth(HomeStack, isLoggedIn);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ProtectedHomeStack" component={ProtectedHomeStack} />
        </Stack.Navigator>
    )
}

export default RootStack