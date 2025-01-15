import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack initialRouteName='index'>
            <Stack.Screen
                name="index"
                options={{ headerShown: false }} // Pantalla principal
            />
            <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false }} // Navegación por pestañas
            />
            <Stack.Screen name="+not-found" />
        </Stack>
    );
}
