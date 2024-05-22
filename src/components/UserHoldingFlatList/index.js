import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from './styles';

const UserHoldingFlatList = ({
    data,
    fetchPortfolioData,
    refreshing
}) => {

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.symbolContainer}>
                <Text style={styles.symbol}>{item.symbol}</Text>
                <Text style={styles.quantity}>{item.quantity}</Text>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.ltp}>LTP :  <Text style={{ fontWeight: 'bold' }}>₹ {item.ltp.toFixed(2)}</Text></Text>
                <Text style={styles.pl}>P/L :  <Text style={{ fontWeight: 'bold' }}>₹ {item.pnl.toFixed(2)}</Text></Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            contentContainerStyle={styles.flatlistContentContainer}
            keyExtractor={item => item.symbol}
            onRefresh={() => { fetchPortfolioData() }}
            refreshing={refreshing}
            removeClippedSubviews={true}
        />
    )
}

export default UserHoldingFlatList