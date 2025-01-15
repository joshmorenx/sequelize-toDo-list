import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import LoginForm from '@/components/LoginForm';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Index Main screen</Text>
      <LoginForm />
      <Link href="/(tabs)/tabindex" style={styles.button}>
        Go to tabs
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
