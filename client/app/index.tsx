import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import LoginForm from '@/components/LoginForm';
import { styles } from '@/constants/styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do App Login</Text>
      <LoginForm />
      <Link href="/(tabs)/tabindex" style={styles.button}>
        Go to tabs
      </Link>
    </View>
  );
}
