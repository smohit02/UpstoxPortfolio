import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        width: '100%',
        height: 45,
        backgroundColor: '#5A2989',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 20

    },
    headerText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'left',
    },
});