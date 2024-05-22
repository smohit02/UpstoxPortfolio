import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, Button, Image, Pressable, } from 'react-native';

import logo from './../../assets/logo.png'
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';
import Config from 'react-native-config';

const Onboarding = ({ navigation }) => {

    useEffect(() => {
        //console.log('\n\n\n\n\n\newiuhviuervrinv :', Config.APP_CONFIG);
    }, [])
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <Image
                    style={{ height: 150, backgroundColor: '#5A2989' }}
                    resizeMode='contain'
                    source={logo}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Pressable
                    android_ripple={{ color: '#5A2989' }}
                    style={styles.button}
                    onPress={() => {
                        dispatch(authActions.setIsLoggedIn(true))
                    }}
                >
                    <Text style={{ fontSize: 18, color: '#000', fontWeight: '900' }}>Continue</Text>
                </Pressable>
            </View>
        </SafeAreaView >
    );
};


export default Onboarding;
