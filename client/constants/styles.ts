import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#25292e'
    },
    text: {
        color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
    formcontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '80%',
    },
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.0)', 
        borderRadius: 0,
        marginTop: -20,
        marginBottom: 50,
    },
    inputContainer: {
        alignSelf: 'center',
        width: '90%',
        marginBottom: 40,
        marginTop: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    forgotOrRegisterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    forgotOrRegisterText: {
        color: 'rgb(255, 255, 255)',
    },
});
