import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    customIndicator: {
        width: '100%',
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    upArrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#5A2989',
    },
    downArrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#5A2989',
    },
    indicatorStyle: {
        height: 0,
        padding: 0,
        margin: 0
    },
    bottomSheet: {
        backgroundColor: '#fff',
        elevation: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    summaryContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 16,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    summaryText: {
        fontSize: 18,
        color: '#000',
        marginVertical: 4,
        textAlign: 'center',
    },
    summaryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});