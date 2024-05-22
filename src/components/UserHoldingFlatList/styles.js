import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    itemContainer: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    symbolContainer: {
        width: '50%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    flatlistContentContainer: {
        paddingBottom: 70
    },
    detailsContainer: {
        width: '50%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: "flex-end",

    },
    symbol: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',

    },
    quantity: {
        fontSize: 16,
        color: '#555',
    },

    ltp: {
        fontSize: 16,
        color: '#000'
    },
    pl: {
        fontSize: 16,
        color: '#000'
    },
});