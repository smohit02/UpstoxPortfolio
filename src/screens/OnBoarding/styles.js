import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#5A2989',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    content: {
        position: 'absolute',
        // alignSelf: 'center',
        // top: '50%',
        // flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 20

    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
        padding: 12,
    },
    button: {
        width: '100%',
        backgroundColor: '#fff',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    }

});