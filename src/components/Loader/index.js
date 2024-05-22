import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { styles } from './styles';

const Loader = () => (
    <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#5A2989" />
    </View>
);


export default Loader;
