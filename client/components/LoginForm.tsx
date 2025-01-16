import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { styles } from '@/constants/styles';
import { useMediaQuery } from "react-responsive";
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import '@expo/match-media'


export default function LoginForm(): JSX.Element {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <TextInput
                label="Email"
                mode="flat"
                textColor='white'
                underlineColor='white'
                activeUnderlineColor='white'
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                label="Password"
                mode="flat"
                textColor='white'
                underlineColor='white'
                activeUnderlineColor='white'
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                right={
                    <TextInput.Icon
                        icon={showPassword ? "eye" : "eye-off"}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
                style={styles.input}
            />
            <View style={styles.forgotOrRegisterContainer}>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.forgotOrRegisterText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.forgotOrRegisterText}>Register</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Button
                    title="Login"
                    onPress={() => { }}
                />
            </View>
        </View>
    );
}