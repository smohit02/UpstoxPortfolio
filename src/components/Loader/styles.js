import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        zIndex: 9999,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.25)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});