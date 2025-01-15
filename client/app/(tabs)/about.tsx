import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About screen</Text>
            {/* Navegar dentro del grupo */}
            <Link href="/(tabs)/tabindex" style={styles.button}>
                Go to Home screen (tabs)
            </Link>
            {/* Navegar fuera del grupo */}
            <Link href="/" style={styles.button}>
                Go to Main Root Screen
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
});
